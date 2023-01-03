"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RefreshPage() {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return null;
}
