import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  GameStateStructure,
  GameStructure,
  GameWithPartialBodyStructure,
} from "./types";
import { copyGames } from "./utils";

export const initialGamesState: GameStateStructure = {
  games: [],
  page: 0,
  maxPage: 0,
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
      games: copyGames([action.payload, ...currentState.games]),
    }),

    editGame: (
      currentState: GameStateStructure,
      action: PayloadAction<GameWithPartialBodyStructure>,
    ): GameStateStructure => {
      const games = copyGames(currentState.games);

      const index = currentState.games.findIndex(({ id }) => {
        return id === action.payload.id;
      });

      let stateGames: GameStructure[];

      [games[index], ...stateGames] = games;

      const gameEdited: GameStructure = { ...games[index], ...action.payload };

      return {
        ...currentState,

        games: copyGames([gameEdited, ...stateGames]),
      };
    },

    setGamePage: (
      currentState: GameStateStructure,
      action: PayloadAction<number>,
    ): GameStateStructure => ({
      ...currentState,
      page: action.payload,
    }),

    setGameMaxPage: (
      currentState: GameStateStructure,
      action: PayloadAction<number>,
    ): GameStateStructure => ({
      ...currentState,
      maxPage: action.payload,
    }),
  },
});

export default gamesSlice.reducer;
export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  addGame: addGameActionCreator,
  editGame: editGameActionCreator,
  setGamePage: setGamePageActionCreator,
  setGameMaxPage: setGameMaxPageActionCreator,
} = gamesSlice.actions;
