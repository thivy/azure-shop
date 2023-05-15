import { render } from "@react-email/render";
import { OrderTemplate } from "../../template/order-template";

export function GET() {
  const html = render(<OrderTemplate />, {
    pretty: false,
  });
  return new Response(html);
}
