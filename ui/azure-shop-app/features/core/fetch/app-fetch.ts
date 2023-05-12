const isPlainObject = (value: unknown) => value?.constructor === Object;

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
  // If we specified a RequestInit for fetch
  if (initOptions?.body) {
    // If we have passed a body property and it is a plain object or array
    if (Array.isArray(initOptions.body) || isPlainObject(initOptions.body)) {
      // Create a new options object serializing the body and ensuring we
      // have a content-type header
      initOptions = {
        ...initOptions,
        body: JSON.stringify(initOptions.body),
        headers: {
          "Content-Type": "application/json",
          ...initOptions.headers,
        },
      };
    }
  }

  const res = await fetch(input, { ...initOptions, next: { revalidate: 10 } });
  if (!res.ok) {
    throw new ResponseError(res.statusText, res);
  }
  return res;
}
