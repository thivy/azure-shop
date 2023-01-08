import { CommunicationProtocolEnum, DaprClient, HttpMethod } from "@dapr/dapr";
import { ProductItem } from "./product/product-item";
import { IProductResponse } from "./product/product-models";

const daprHost = "127.0.0.1";

export const addToTopic = async () => {
  console.log("Starting dapr");
  const client = new DaprClient(
    daprHost,
    process.env.DAPR_HTTP_PORT,
    CommunicationProtocolEnum.HTTP
  );
  console.log("calling dapr");
  const tt = await client.invoker.invoke(
    "shop-products",
    "api/collections/products/records",
    HttpMethod.GET
  );

  console.log("called dapr");
  console.log(tt);
};

async function getData(): Promise<IProductResponse | null> {
  try {
    // await addToTopic();
    const res = await fetch(process.env.SHOP_API ?? "");
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (e) {
    console.log("Failed to FETCH", e);
    return null;
  }
}

export default async function ShopResults() {
  const data = await getData();

  return (
    <div className="grid grid-flow-row lg:grid-cols-4 my-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
      {data
        ? data.items.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))
        : null}
    </div>
  );
}
