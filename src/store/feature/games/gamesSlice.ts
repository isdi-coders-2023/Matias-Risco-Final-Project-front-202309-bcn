import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  GameStateStructure,
  GameStructure,
  GameWithPartialBodyStructure,
} from "./types";
import { copyGames } from "./utils";

export const initialGamesState: GameStateStructure = {
  games: [],
  countGames: 0,
};

const gamesSlice = createSlice({
  name: "gameState",
  initialState: initialGamesState,
  reducers: {
    loadGames: (
      currentState: GameStateStructure,
      action: PayloadAction<GameStructure[]>,
    ): GameStateStructure => ({
      ...currentState,
      games: copyGames(action.payload),
    }),

    deleteGame: (
      currentState: GameStateStructure,
      action: PayloadAction<string>,
    ): GameStateStructure => ({
      ...currentState,
      games: copyGames(
        currentState.games.filter(({ id }) => id !== action.payload),
      ),
    }),

    addGame: (
      currentState: GameStateStructure,
      action: PayloadAction<GameStructure>,
    ) => ({
      ...currentState,
      games: copyGames([...currentState.games, action.payload]),
    }),

    editGame: (
      currentState: GameStateStructure,
      action: PayloadAction<GameWithPartialBodyStructure>,
    ): GameStateStructure => {
      const { games } = currentState;

      const index = currentState.games.findIndex(
        ({ id }) => id === action.payload.id,
      );
      let stateGames: GameStructure[];
      [games[index], ...stateGames] = games;

      return {
        ...currentState,
        games: copyGames([
          ...stateGames,
          { ...games[index], ...action.payload },
        ]),
      };
    },

    setGameCount: (
      currentState: GameStateStructure,
      action: PayloadAction<number>,
    ) => ({
      ...currentState,
      countGames: action.payload,
    }),
  },
});

export default gamesSlice.reducer;
export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  addGame: addGameActionCreator,
  editGame: editGameActionCreator,
  setGameCount: setGameCountActionCreator,
} = gamesSlice.actions;
