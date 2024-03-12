// src/pages/index.tsx
import Dashboard from "@/components/sections/Dashboard/Dashboard";
import Head from "next/head";
import Header from "@/components/layout/Header";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Felt Casino</title>
        <meta name="title" content="Felt Casino" />
        <meta
          name="Bet with SOL USDC JUP GMCOCK"
          content="A decentralized casino on Solana built by Felt gaming Labs."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test-casino-xi.vercel.app/" />
        <meta property="og:title" content="Felt Casino" />
        <meta
          property="og:description"
          content="A decentralized casino on Solana built by Felt gaming Labs."
        />
        <meta property="og:image" content="https://i.imgur.com/trxhhWX.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://test-casino-xi.vercel.app/"
        />
        <meta property="twitter:title" content="Felt Casino" />
        <meta
          property="twitter:description"
          content="A decentralized casino on Solana built by Felt gaming Labs."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/trxhhWX.png"
        />
      </Head>
      <Header />
      <div className="relative mx-auto flex flex-col gap-5 max-sm:pt-20 md:pt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        <Dashboard />
      </div>
    </>
  );
}
