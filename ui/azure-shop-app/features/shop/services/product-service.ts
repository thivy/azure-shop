import { IProductResponse, IVote } from "./models";

export const getProducts = async (
  page: number = 1
): Promise<IProductResponse | null> => {
  await sleep(random(10));

  const api = process.env.SHOP_API ?? "";

  try {
    const res = await fetch(`${api}?page=${page}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (e) {
    console.log("Failed to FETCH", e);
    return null;
  }
};

export const getProductVotes = async (): Promise<Array<IVote>> => {
  await sleep(random(5));

  return [...randomVotes("👍"), ...randomVotes("🧡"), ...randomVotes("🤣")];
};

const randomVotes = (vote: string) => {
  const votes: Array<IVote> = [];
  for (let i = 0; i < random(50); i++) {
    votes.push({ product: "1", vote: vote });
  }

  return votes;
};

// return a promise that resolves after seconds
const sleep = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// random number between 0 and 3
const random = (value: number) => Math.floor(Math.random() * value);
