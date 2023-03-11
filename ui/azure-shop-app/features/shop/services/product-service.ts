import { IProductResponse, IVote } from "./models";

export const getProducts = async (
  page: number = 1
): Promise<IProductResponse | null> => {
  await sleep(1);
  const api = `${process.env.CMS_API}/api/collections/products/records` ?? "";

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
  await sleep(1);

  return [...randomVotes("👍"), ...randomVotes("🧡"), ...randomVotes("🤣")];
};

const randomVotes = (vote: string) => {
  const votes: Array<IVote> = [];
  for (let i = 0; i < random(50); i++) {
    votes.push({ product: "1", vote: vote });
  }

  return votes;
};

export const getFeaturedProducts =
  async (): Promise<IProductResponse | null> => {
    const api =
      `${process.env.CMS_API}/api/collections/products/records?filter=featured=true` ??
      "";
    console.log(api);
    try {
      const res = await fetch(`${api}`);
      if (!res.ok) {
        return null;
      }
      return res.json();
    } catch (e) {
      console.log("Failed to FETCH", e);
      return null;
    }
  };

// return a promise that resolves after seconds
const sleep = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// return a random number between 0 and max
const random = (max: number) => Math.floor(Math.random() * max);
