import { GameStructure } from "../store/feature/games/types";

const gamesData: GameStructure[] = [
  {
    id: "ADSEGWEWG432t2",
    name: "Portal",
    tags: ["Puzzle", "Action", "3D", "First-Person", "Singleplayer"],
    platforms: ["Windows", "VR"],
    imageUrl: "https://i.ibb.co/bRCYR1d/Portal.webp",
    audience: ["Adults", "Grandma", "Teens"],
    difficulty: "Significant brain usage",
    gameTime: "Average",
    graphics: "Decent",
    grind: "Nothing to grind",
    languages: [
      "English",
      "Spanish",
      "Japanese",
      "Russian",
      "Danish",
      "Dutch",
      "Finnish",
    ],
  },
  {
    id: "g4erwphiou43t2",
    name: "Counter Strike 2",
    tags: ["Shooter", "Action", "3D", "First-Person", "Multiplayer"],
    platforms: ["Windows", "VR"],
    imageUrl: "https://i.ibb.co/HYrVhK4/Counter-Strike-2.webp",
    audience: ["Adults", "Teens"],
    difficulty: "Easy to learn / Hard to master",
    gameTime: "Average",
    graphics: "Decent",
    grind: "Only if u care about leaderboards/ranks",
    languages: ["English", "Spanish", "Finnish"],
  },
];

export default gamesData;
