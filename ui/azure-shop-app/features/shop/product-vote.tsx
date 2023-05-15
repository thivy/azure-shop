import { EmojiVote } from "@components/emoji-vote/emoji-vote";
import { uiDebug } from "@features/settings";
import { revalidateTag } from "next/cache";
import {
  addProductVotes,
  getProductVotes,
  getVoteCache,
} from "./services/product-service";

interface IProp {
  productId: string;
}

export async function ProductVote(props: IProp) {
  const voteResponse = await getProductVotes(props.productId);
  let up = voteResponse["👍"] ?? 0,
    heart = voteResponse["🧡"] ?? 0,
    funny = voteResponse["🤣"] ?? 0;

  const addVote = async (productId: string, emoji: string) => {
    "use server";
    await addProductVotes(productId, emoji);
    revalidateTag(getVoteCache(productId)); // revalidate the cache for this product
  };

  return (
    <div className={`flex gap-4 justify-between ${uiDebug(false)}`}>
      <EmojiVote
        count={up}
        emoji="👍"
        productId={props.productId}
        onClick={addVote}
      />
      <EmojiVote
        count={heart}
        emoji="🧡"
        productId={props.productId}
        onClick={addVote}
      />
      <EmojiVote
        count={funny}
        emoji="🤣"
        productId={props.productId}
        onClick={addVote}
      />
    </div>
  );
}

export const ProductVoteLoading = () => {
  return (
    <div className="flex  h-10 animate-pulse">
      <div className="p-2 flex-1 hover:bg-slate-400/25 rounded-md flex gap-2 bg-slate-400/10 px-3"></div>
    </div>
  );
};
