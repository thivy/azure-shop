import { Panel } from "@components/panel";
import { uiDebug } from "@features/settings";
import { FC, Suspense } from "react";
import { ProductAdd } from "./product-add";
import { ProudctVote, ProudctVoteLoading } from "./product-vote";
import { IProduct } from "./services/models";

interface IProp {
  product: IProduct;
}

export const ProudctResultItem: FC<IProp> = (props) => {
  const _prop = {
    ...props,
    product: {
      ...props.product,
      image: `${process.env.IMAGE_API}/${props.product.collectionId}/${props.product.id}/${props.product.image}`,
    },
  };
  return (
    <Panel className={`justify-center flex flex-col gap-8 ${uiDebug(false)}`}>
      <div className="text-slate-50 truncate ">{props.product.name}</div>
      <img
        className="self-center p-4"
        src={_prop.product.image}
        alt={_prop.product.name}
        width={350}
        height={30}
      />

      <div className="flex flex-row items-center justify-between gap-4">
        <div>${props.product.price}</div>
        <ProductAdd product={_prop.product} />
      </div>
      <Suspense fallback={<ProudctVoteLoading />}>
        {/* TODO: demo add suspense */}
        {/* @ts-expect-error Server Component */}
        <ProudctVote />
      </Suspense>
    </Panel>
  );
};

// const WithSuspense = () => {
//   return (
//     <Suspense fallback={<ProudctVoteLoading />}>
//       {/* @ts-expect-error Server Component */}
//       <ProudctVote />
//     </Suspense>
//   );
// };
