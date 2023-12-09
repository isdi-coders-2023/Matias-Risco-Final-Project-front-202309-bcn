import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import {
  GameStructure,
  GameWithOutIdStructure,
  GameWithPartialBodyStructure,
} from "../store/feature/games/types";
import { useAppDispatch } from "../store/hooks";
import { toggleLoadingActionCreator } from "../store/feature/ui/uiSlice";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useGameApi = () => {
  const dispatch = useAppDispatch();

  const getGamesApi = useCallback(async (): Promise<GameStructure[]> => {
    dispatch(toggleLoadingActionCreator());

    try {
      const {
        data: { games },
      } = await axios.get<{ games: GameStructure[] }>("/games");

      dispatch(toggleLoadingActionCreator());

      return games;
    } catch (error) {
      dispatch(toggleLoadingActionCreator());

      throw new Error((error as Error).message);
    }
  }, [dispatch]);

  const deleteGameApi = useCallback(
    async (id: string): Promise<GameStructure> => {
      dispatch(toggleLoadingActionCreator());

      try {
        const {
          data: { game },
        } = await axios.delete<{ game: GameStructure }>(`/games/delete/${id}`);

        dispatch(toggleLoadingActionCreator());

        return game;
      } catch {
        dispatch(toggleLoadingActionCreator());

        throw new Error("game not found");
      }
    },
    [dispatch],
  );

  const addGameApi = useCallback(
    async (newGame: GameWithOutIdStructure): Promise<GameStructure> => {
      dispatch(toggleLoadingActionCreator());
      try {
        const {
          data: { game },
        } = await axios.post<{ game: GameStructure }>(`/games/add`, {
          game: newGame,
        });
        dispatch(toggleLoadingActionCreator());
        return game;
      } catch {
        dispatch(toggleLoadingActionCreator());
        throw new Error("Error in adding the new game");
      }
    },
    [dispatch],
  );

  const infoGameApi = useCallback(
    async (id: string): Promise<GameStructure> => {
      dispatch(toggleLoadingActionCreator());
      try {
        const {
          data: { game },
        } = await axios.get<{ game: GameStructure }>(`/games/info/${id}`);

        dispatch(toggleLoadingActionCreator());

        return game;
      } catch {
        dispatch(toggleLoadingActionCreator());

        throw new Error("Error game not found");
      }
    },
    [dispatch],
  );

  const editGame = useCallback(
    async (editedGame: GameWithPartialBodyStructure) => {
      dispatch(toggleLoadingActionCreator());
      try {
        const { id } = editedGame;

        const {
          data: { game },
        } = await axios.patch<
          { game: GameWithPartialBodyStructure },
          AxiosResponse<{ game: GameStructure }>
        >(`/games/edit/${id}`, { game: editedGame });

        dispatch(toggleLoadingActionCreator());
        return game;
      } catch {
        dispatch(toggleLoadingActionCreator());

        throw new Error("Error game not found");
      }
    },
    [dispatch],
  );

  return { getGamesApi, deleteGameApi, addGameApi, infoGameApi, editGame };
};

export default useGameApi;
