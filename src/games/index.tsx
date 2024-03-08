// src/games/index.tsx

import { GameBundle } from "gamba-react-ui-v2";
import dynamic from "next/dynamic";

export const GAMES: GameBundle[] = [
  {
    id: "dice",
    meta: {
      background: "#ff6490",
      name: "Dice",
      image: "/games/logo.png",
      description: `Dice challenges players to predict the outcome of a roll with a unique twist. Select a number and aim to roll below it to win. Adjusting your choice affects potential payouts, balancing risk and reward for an engaging experience.`,
    },
    app: dynamic(() => import("./Dice")),
  },
  {
    id: "slots",
    meta: {
      background: "#5465ff",
      name: "Slots",
      image: "/games/logo.png",
      description: `Spin 2 win. Try to hit the 7x and try not to get wased.`,
    },
    app: dynamic(() => import("./Slots")),
  },
  {
    id: "flip",
    meta: {
      background: "#ffe694",
      name: "Coin Flip",
      image: "/games/logo.png",
      description: `Flip offers a straightforward yet thrilling gamble: choose Heads or Tails and double your money or lose it all. This simple, high-stakes game tests your luck and decision-making with every flip of the coin.`,
    },
    app: dynamic(() => import("./Flip")),
  },
  {
    id: "hilo",
    meta: {
      background: "#ff4f4f",
      name: "HiLo",
      image: "/games/logo.png",
      description: `HiLo is a game where players guess whether the next card will be higher or lower. Make consecutive correct guesses to increase your winnings, and decide when to cash out for maximum rewards.`,
    },
    props: { logo: "/logo.svg" },
    app: dynamic(() => import("./HiLo")),
  },
  {
    id: "mines",
    meta: {
      background: "#8376ff",
      name: "Mines",
      image: "/games/logo.png",
      description: `Uncover squares to find hidden treasures, but beware of mines that could end your game instantly. With every square, the stakes get higher.`,
    },
    app: dynamic(() => import("./Mines")),
  },
  {
    id: "roulette",
    meta: {
      background: "#1de87e",
      name: "Roulette",
      image: "/games/logo.png",
      description: `So many choices, most of them wrong... Bet on where the ball will land and watch as the wheel decides your fate. Take a shot for big wins and hate yourself for it afterwards.`,
    },
    app: dynamic(() => import("./Roulette")),
  },
  {
    id: "plinko",
    meta: {
      background: "#7272ff",
      name: "Plinko",
      image: "/games/logo.png",
      description: `Pegs. Balls. Holes... No it isn't your college rugby team away game flashbacks, it's Plinko!`,
    },
    app: dynamic(() => import("./Plinko")),
  },
  {
    id: "wheel",
    meta: {
      background: "#77bbff",
      name: "Wheel",
      image: "/games/logo.png",
      description: `Wheel you have the balls to hit big? Or wheel you fumble the bag?`,
    },
    app: dynamic(() => import("./Wheel"), { ssr: false }),
  },
  {
    id: "limbo",
    meta: {
      background: "#ff7d7d",
      name: "Razor X",
      image: "/games/logo.png",
      description: `To play Razor, set a target multiplier and place your bet. If the outcome surpasses your set multiplier, you win. Razor X tests your strategy and luck, pushing for higher multipliers for bigger wins.`,
    },
    app: dynamic(() => import("./Limbo")),
  },
  {
    id: "keno",
    meta: {
      background: "#317aff",
      name: "Keno",
      image: "/games/logo.png",
      description: `Grab your cigs and your coffee... select up to 10 blocks and place your bets! Fewer numbers for a chance at bigger wins, or more numbers for better odds of winning smaller prizes.`,
    },
    app: dynamic(() => import("./Keno")),
  },
];
