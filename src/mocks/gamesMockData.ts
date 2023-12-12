import { GameStructure } from "../store/feature/games/types";

const addGames = (name: string, id: string, num: number) => {
  const newGames: GameStructure[] = [];
  for (let index = 1; index < num + 1; index++) {
    let hexStr = (parseInt(id.slice(-6), 16) + Number(index)).toString(16);
    while (hexStr.length < 6) {
      hexStr = "0" + hexStr;
    }

    newGames.push({
      audience: ["Adults", "Grandma"],
      difficulty: "Easy",
      gameTime: "To infinity and beyond",
      graphics: "Decent",
      grind: "You'll need a second life",
      id: `${id}${hexStr}`,
      imageUrl:
        "https://www.king.com/images/share/banners/candycrush.png?_v=kmoqjd",
      languages: ["Danish", "English", "Russian", "Spanish"],
      name: `${name}${index}`,
      platforms: ["Windows", "VR"],
      tags: ["Free to Play", "Arcade", "Casual", "Colorful"],
    });
  }
  return newGames;
};

const gamesMock: GameStructure[] = [
  {
    audience: ["Adults", "Teens"],
    difficulty: "Dark Souls",
    gameTime: "Long enough for a cup of coffee",
    graphics: "Don't look too long at it",
    grind: "Only if u care about leaderboards",
    id: "656ab2e33eb96014d34e07dd",
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
    id: "656ab3423eb96014d34e07de",
    imageUrl:
      "https://www.king.com/images/share/banners/candycrush.png?_v=kmoqjd",
    languages: ["Danish", "English", "Russian", "Spanish"],
    name: "Cady Crush",
    platforms: ["Windows", "VR"],
    tags: ["Free to Play", "Arcade", "Casual", "Colorful"],
  },
  ...addGames("pepe", "656ab3423eb96014d34e07de", 20),
];

export default gamesMock;
