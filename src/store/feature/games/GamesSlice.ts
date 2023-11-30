import { createSlice } from "@reduxjs/toolkit";
import { GameStateStructure } from "./types";

export const initialGamesState: GameStateStructure = {
  games: [],
};

const gamesSlice = createSlice({
  name: "gameState",
  initialState: initialGamesState,
  reducers: {},
});

export default gamesSlice.reducer;
