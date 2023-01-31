import { EmojiVote } from "@components/emoji-vote/emoji-vote";
import { getProductVotes } from "./services/product-service";

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
