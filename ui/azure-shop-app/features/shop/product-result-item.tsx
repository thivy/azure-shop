import { EmojiVote } from "@components/emoji-vote/emoji-vote";
import { Panel } from "@components/panel";
import Image from "next/image";
import { FC, Suspense } from "react";
import { ProductAdd } from "./product-add";
import { IProduct } from "./services/models";
import { getProductVotes } from "./services/product-service";

interface IProp {
  product: IProduct;
}

export const ProudctResultItem: FC<IProp> = (props) => {
  const _prop = {
    ...props,
    product: {
      ...props.product,
      image: `${process.env.CMS_API}/api/files/${props.product.collectionId}/${props.product.id}/${props.product.image}`,
    },
  };
  return (
    <Panel className="justify-center flex flex-col gap-8">
      <div className="text-slate-50 truncate ">{props.product.name}</div>
      <Image
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
        {/* @ts-expect-error Server Component */}
        <ProudctVote />
      </Suspense>
    </Panel>
  );
};

export const ProudctResultItemLoading: FC = () => {
  return (
    <>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
    </>
  );
};

export const ProudctVote = async () => {
  let up = 0,
    heart = 0,
    funny = 0;

  try {
    const items = await getProductVotes();
    up = items.filter((x) => x.vote === "👍").length ?? 0;
    heart = items.filter((x) => x.vote === "🧡").length ?? 0;
    funny = items.filter((x) => x.vote === "🤣").length ?? 0;
  } catch {}

  return (
    <div className="flex gap-4 justify-between">
      <EmojiVote count={up} emoji="👍" />
      <EmojiVote count={heart} emoji="🧡" />
      <EmojiVote count={funny} emoji="🤣" />
    </div>
  );
};

export const ProudctVoteLoading = () => {
  return (
    <div className="flex  h-10 animate-pulse">
      <div className="p-2 flex-1 hover:bg-slate-400/25 rounded-md flex gap-2 bg-slate-400/10 px-3"></div>
    </div>
  );
};
