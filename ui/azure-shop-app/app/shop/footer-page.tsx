import Link from "next/link";
import { getProducts } from "./services/product-service";

export default async function FooterPage() {
  const data = await getProducts();
  //create array with n elements
  const arr = new Array(data?.totalPages).fill(0);

  return (
    <div className="flex gap-4 col-span-4 self-center">
      {data
        ? arr.map((_, index) => (
            <Link
              className="bg-purple-600/40 text-white rounded-md px-4 py-2 font-bold  hover:bg-purple-600/90"
              href={`/shop/${index + 1}`}
            >
              {index + 1}
            </Link>
          ))
        : null}
    </div>
  );
}
