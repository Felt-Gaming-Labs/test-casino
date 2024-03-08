// config.ts

import { GambaStandardTokens, TokenMeta } from "gamba-react-ui-v2";

import { PublicKey } from "@solana/web3.js";

// Solana address you wish to receive fees
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "6715ymvd38EeSQjZ3vRSA9X68RC73GYynSNRn3pu5732",
);

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = "casino.feltgaming.io";

// Toggle all live events acrossed gamba toast
export const LIVE_EVENT_TOAST = true;

// RPC - Can be configured in .env
export const RPC_ENDPOINT =
  process.env.NEXT_PUBLIC_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com";

// Platform explorer URL - Appears in welcome banner
export const PLATFORM_EXPLORER_URL = `https://explorer.gamba.so/platform/${PLATFORM_CREATOR_ADDRESS.toString()}`;

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  {
    mint: new PublicKey("8CSTYs264XFrGym2WLy6QGgq6isxU8G4Und9q1gVbbbB"),
    symbol: 'GMCOCK',
    name: '$GMCOCK',
    image: "https://i.imgur.com/YRZpssx.png",
    decimals: 8,
    baseWager: 1,
  },
];
