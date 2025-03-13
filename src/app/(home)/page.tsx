import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ClientPage from "./client";

export default async function Home() {
  void trpc.hello.prefetch({ text: "prats " });

  return (
    <HydrateClient>
      <Suspense fallback={<p>loading...</p>} />
      <ErrorBoundary fallback={<p>error</p>}>
        <ClientPage />
      </ErrorBoundary>
    </HydrateClient>
  );
}
