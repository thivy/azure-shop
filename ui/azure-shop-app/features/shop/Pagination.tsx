import { uiDebug } from "@features/settings";
import Link from "next/link";
import { getProducts } from "./services/product-service";

export default async function Pagination({
  activePage,
}: {
  activePage: number;
}) {
  const data = await getProducts();

  const arr = new Array(data?.totalPages).fill(0).map((_, index) => index + 1);

  return (
    <div
      className={`flex gap-4 col-span-4 self-center py-4 overflow-x-auto ${uiDebug(
        false
      )}`}
    >
      {data
        ? arr.map((value) => (
            <Link
              className={`bg-purple-600/20 text-white rounded-md px-4 py-2 font-bold  hover:bg-purple-600/90 ${
                activePage == value ? "bg-purple-600/90" : ""
              }`}
              href={`/shop/${value}`}
            >
              {value}
            </Link>
          ))
        : null}
    </div>
  );
}
