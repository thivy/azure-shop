import { DaprClient } from "@dapr/dapr";
import CommunicationProtocolEnum from "@dapr/dapr/enum/CommunicationProtocol.enum";
import { IOrder } from "@features/cart/services/models";
import { NextApiRequest, NextApiResponse } from "next";
import PocketBase from "pocketbase";

const daprHost = "127.0.0.1";

export const addToTopic = async (item: IOrder) => {
  const client = new DaprClient(
    daprHost,
    process.env.DAPR_HTTP_PORT,
    CommunicationProtocolEnum.HTTP
  );

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await addToOrder(req.body);
    res.status(200).json("done");
  } catch (e) {
    res.status(200).json(e);
  }
}
