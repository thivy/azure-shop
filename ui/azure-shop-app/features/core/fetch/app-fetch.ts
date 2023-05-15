export class ResponseError extends Error {
  response: Response;

  constructor(message: string, res: Response) {
    super(message);
    this.response = res;
    this.name = "ResponseError";
  }
}

export async function fetcher(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  let initOptions = init;
  initOptions = {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    next: { revalidate: init?.method === "POST" ? 0 : 10 },
  };

  const res = await fetch(input, initOptions);
  if (!res.ok) {
    throw new ResponseError(res.statusText, res);
  }
  return res;
}
