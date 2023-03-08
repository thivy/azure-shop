import Link from "next/link";
import { getProducts } from "./services/product-service";

export default async function Pagination({
  activePage,
}: {
  activePage: number;
}) {
  const data = await getProducts();
  const arr = new Array(data?.totalPages).fill(0);
  return (
    <div className="flex gap-4 col-span-4 self-center pb-6 overflow-x-auto">
      {data
        ? arr.map((_, index) => (
            <Link
              className={`bg-purple-600/20 text-white rounded-md px-4 py-2 font-bold  hover:bg-purple-600/90 ${
                activePage == index + 1 ? "bg-purple-600/90" : ""
              }`}
              href={`/shop/${index + 1}`}
            >
              {index + 1}
            </Link>
          ))
        : null}
    </div>
  );
}
