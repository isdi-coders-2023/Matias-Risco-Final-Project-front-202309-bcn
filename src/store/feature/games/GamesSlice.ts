import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GameStateStructure, GameStructure } from "./types";
import { copyGames } from "./utils";

export const initialGamesState: GameStateStructure = {
  games: [],
};

const gamesSlice = createSlice({
  name: "gameState",
  initialState: initialGamesState,
  reducers: {
    loadGames: (currentState, action: PayloadAction<GameStructure[]>) => ({
      ...currentState,
      games: copyGames(action.payload),
    }),
  },
});

export default gamesSlice.reducer;
export const { loadGames: loadGamesActionCreator } = gamesSlice.actions;
