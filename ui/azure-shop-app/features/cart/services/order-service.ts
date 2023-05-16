"use server";
import { CommunicationProtocolEnum, DaprClient } from "@dapr/dapr";
import { fetcher } from "@features/core/fetch/app-fetch";
import { randomUUID } from "crypto";
import { IOrder } from "./models";

const daprHost = "127.0.0.1";

const addToTopic = async (order: Order) => {
  const client = new DaprClient({
    communicationProtocol: CommunicationProtocolEnum.HTTP, // default
    daprHost: daprHost, // default
    daprPort: process.env.DAPR_HTTP_PORT, // default
  });
  await client.pubsub.publish(
    process.env.PUB_SUB_NAME,
    process.env.PUB_SUB_TOPIC,
    order
  );
};

export const placeOrder = async (order: IOrder): Promise<void> => {
  const uuid = randomUUID();

  order.cart.forEach(async (item) => {
    console.log(item);
    const _order = {
      orderid: uuid,
      product: item.product.id,
      quantity: item.quantity,
      productname: item.product.name,
    };
    const api = `${process.env.CMS_API}/api/collections/orders/records`;
    await fetcher(api, {
      method: "POST",
      body: JSON.stringify(_order),
    });
  });

  addToTopic({ OrderId: uuid, Recipient: order.email });
};

interface Order {
  OrderId: string;
  Recipient: string;
}
