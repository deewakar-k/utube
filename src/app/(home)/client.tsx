"use client";

import { trpc } from "@/trpc/client";

export default function ClientPage() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "prats" });

  return <p className="text-xl font-medium tracking-tight">{data.greeting}</p>;
}
