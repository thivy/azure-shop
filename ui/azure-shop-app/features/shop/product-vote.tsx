import { EmojiVote } from "@components/emoji-vote/emoji-vote";
import { uiDebug } from "@features/settings";
import { getProductVotes } from "./services/product-service";

export const ProductVote = async () => {
  const voteResponse = await getProductVotes();
  let up = voteResponse.items[0].count,
    heart = voteResponse.items[1].count,
    funny = voteResponse.items[2].count;

  return (
    <div className={`flex gap-4 justify-between ${uiDebug(false)}`}>
      <EmojiVote count={up} emoji="👍" />
      <EmojiVote count={heart} emoji="🧡" />
      <EmojiVote count={funny} emoji="🤣" />
    </div>
  );
};

export const ProductVoteLoading = () => {
  return (
    <div className="flex  h-10 animate-pulse">
      <div className="p-2 flex-1 hover:bg-slate-400/25 rounded-md flex gap-2 bg-slate-400/10 px-3"></div>
    </div>
  );
};
