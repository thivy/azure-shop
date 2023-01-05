import { DaprClient } from "@dapr/dapr";
import CommunicationProtocolEnum from "@dapr/dapr/enum/CommunicationProtocol.enum";
import { IcartItem } from "app/shop/shop-context";
import { NextApiRequest, NextApiResponse } from "next";
import PocketBase from "pocketbase";

const daprHost = "127.0.0.1";

export const addToTopic = async (item: IcartItem) => {
  const client = new DaprClient(
    daprHost,
    process.env.DAPR_HTTP_PORT,
    CommunicationProtocolEnum.HTTP
  );

  const result = {
    productid: item.prodct.id,
  };
  await client.pubsub.publish("servicebus-pubsub", "order", result);
};

const addToOrder = async (cart: Array<IcartItem>) => {
  const pb = new PocketBase(process.env.CMS_API);

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const record = await pb.collection("orders").create({
      productid: item.prodct.id,
      quantity: item.quantity,
      productname: item.prodct.name,
    });
    await addToTopic(item);
  }
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
