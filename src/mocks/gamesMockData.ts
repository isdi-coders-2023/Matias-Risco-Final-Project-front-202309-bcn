import { GameStructure } from "../store/feature/games/types";

const gamesMock: GameStructure[] = [
  {
    audience: ["Adults", "Teens"],
    difficulty: "Dark Souls",
    gameTime: "Long enough for a cup of coffee",
    graphics: "Don't look too long at it",
    grind: "Only if u care about leaderboards",
    id: "eqwfewqfweqfwqefweq",
    imageUrl: "https://i.ibb.co/PWKB6yW/ULTRAKILL.jpg",
    languages: ["Danish", "English", "Russian", "Spanish"],
    name: "Ultrakill",
    platforms: ["Windows", "VR"],
    tags: ["3D", "Action", "Gore", "Shooter"],
  },
  {
    audience: ["Adults", "Grandma"],
    difficulty: "Easy",
    gameTime: "To infinity and beyond",
    graphics: "Decent",
    grind: "You'll need a second life",
    id: "324ftrwesfrgoiw34t",
    imageUrl:
      "https://www.king.com/images/share/banners/candycrush.png?_v=kmoqjd",
    languages: ["Danish", "English", "Russian", "Spanish"],
    name: "Cady Crush",
    platforms: ["Windows", "VR"],
    tags: ["Free to Play", "Arcade", "Casual", "Colorful"],
  },
];

export default gamesMock;
