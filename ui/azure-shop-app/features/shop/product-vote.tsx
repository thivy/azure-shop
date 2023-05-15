import { EmojiVote } from "@components/emoji-vote/emoji-vote";
import { uiDebug } from "@features/settings";
import { addProductVotes, getProductVotes } from "./services/product-service";

interface IProp {
  productId: string;
}

export async function ProductVote(props: IProp) {
  const voteResponse = await getProductVotes();
  let up = voteResponse.items[0].count,
    heart = voteResponse.items[1].count,
    funny = voteResponse.items[2].count;

  const addVote = async (emoji: string) => {
    "use server";
    await addProductVotes(props.productId, emoji);
  };

  return (
    <div className={`flex gap-4 justify-between ${uiDebug(false)}`}>
      <EmojiVote count={up} emoji="👍" onClick={addVote} />
      <EmojiVote count={heart} emoji="🧡" onClick={addVote} />
      <EmojiVote count={funny} emoji="🤣" onClick={addVote} />
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
