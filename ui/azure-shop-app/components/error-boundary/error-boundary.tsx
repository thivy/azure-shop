import { ResponseError } from "@features/core/fetch/app-fetch";

interface ErrorBoundaryProps {
  error: Error | ResponseError;
}

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  return <div>{props.error.message}</div>;
}
