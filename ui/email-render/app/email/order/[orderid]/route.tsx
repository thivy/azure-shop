import { render } from "@react-email/render";
import { OrderTemplate } from "../../../template/order-template";
import { IResponse } from "../model";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { orderid: string };
  }
) {
  let orders = await getOrder(params.orderid);
  const html = render(<OrderTemplate orders={orders.items} />, {
    pretty: false,
  });
  return new Response(html);
}

const getOrder = async (orderId: string): Promise<IResponse> => {
  const api = `${process.env.CMS_API}/api/collections/orders/records?filter=orderid='${orderId}'`;
  const res = await fetch(api);
  const order = (await res.json()) as IResponse;
  return order;
};
