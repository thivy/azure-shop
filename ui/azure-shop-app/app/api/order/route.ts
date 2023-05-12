import { DaprClient } from "@dapr/dapr";
import CommunicationProtocolEnum from "@dapr/dapr/enum/CommunicationProtocol.enum";
import { IOrder } from "@features/cart/services/models";
import PocketBase from "pocketbase";

export async function POST(request: Request) {
  const res = (await request.json()) as IOrder;
  await addToOrder(res);
  return new Response("done");
}

const daprHost = "127.0.0.1";

export const addToTopic = async (item: IOrder) => {
  const client = new DaprClient({
    communicationProtocol: CommunicationProtocolEnum.HTTP, // default
    daprHost: daprHost, // default
    daprPort: process.env.DAPR_HTTP_PORT, // default
  });
  await client.pubsub.publish("servicebus-pubsub", "order", item);
};

const addToOrder = async (order: IOrder) => {
  const pb = new PocketBase(process.env.CMS_API);

  for (let i = 0; i < order.cart.length; i++) {
    const item = order.cart[i];
    const record = await pb.collection("orders").create({
      productid: item.prodct.id,
      quantity: item.quantity,
      productname: item.prodct.name,
    });
  }

  await addToTopic(order);
};
