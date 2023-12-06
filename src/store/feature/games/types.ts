export const difficulty = [
  "Just press 'W'",
  "Easy",
  "Easy to learn / Hard to master",
  "Significant brain usage",
  "Difficult",
  "Dark Souls",
] as const;

export const graphics = [
  "You forget what reality is",
  "Beautiful",
  "Good",
  "Decent",
  "Bad",
  "Don't look too long at it",
  "MS-DOS",
] as const;

export const grind = [
  "Nothing to grind",
  "Only if u care about leaderboards",
  "Isn't necessary to progress",
  "Average grind level",
  "Too much grind",
  "You'll need a second life",
] as const;

export const gameTime = [
  "Long enough for a cup of coffee",
  "Short",
  "Average",
  "Long",
  "To infinity and beyond",
] as const;

export const audience = ["Kids", "Teens", "Adults", "Grandma"] as const;

export const languages = [
  "English",
  "French",
  "German",
  "Russian",
  "Danish",
  "Dutch",
  "Finnish",
  "Italian",
  "Japanese",
  "Norwegian",
  "Polish",
  "Spanish",
] as const;

export const tag = [
  "Indie",
  "Action",
  "Adventure",
  "Casual",
  "RPG",
  "Simulation",
  "Strategy",
  "Singleplayer",
  "Early Access",
  "Free to Play",
  "2D",
  "3D",
  "Atmospheric",
  "Fantasy",
  "Story Rich",
  "Colorful",
  "Multiplayer",
  "Puzzle",
  "Exploration",
  "Pixel Graphics",
  "Massively Multiplayer",
  "Cute",
  "Sports",
  "Violent",
  "First-Person",
  "Combat",
  "Racing",
  "Action-Adventure",
  "Anime",
  "Arcade",
  "Funny",
  "Sci-fi",
  "Shooter",
  "Relaxing",
  "Horror",
  "Gore",
] as const;

export const platforms = ["VR", "Windows", "Linux", "Mac"] as const;

export type Platforms = (typeof platforms)[number];
export type Tag = (typeof tag)[number];
export type Languages = (typeof languages)[number];
export type Audience = (typeof audience)[number];
export type GameTime = (typeof gameTime)[number];
export type Grind = (typeof grind)[number];
export type Graphics = (typeof graphics)[number];
export type Difficulty = (typeof difficulty)[number];

export interface GameStructure {
  id: string;
  name: string;
  platforms: Platforms[];
  difficulty: Difficulty;
  imageUrl: string;
  languages: Languages[];
  graphics: Graphics;
  audience: Audience[];
  grind: Grind;
  gameTime: GameTime;
  tags: Tag[];
}

export type GameWithOutIdStructure = Omit<GameStructure, "id">;

export interface GameStateStructure {
  games: GameStructure[];
}
