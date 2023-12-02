import axios from "axios";
import { useCallback } from "react";
import { GameStructure } from "../store/feature/games/types";
import { useAppDispatch } from "../store/hooks";
import { toggleLoadingActionCreator } from "../store/feature/ui/UiSlice";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useGameApi = () => {
  const dispatch = useAppDispatch();

  const getGamesApi = useCallback(async (): Promise<GameStructure[]> => {
    dispatch(toggleLoadingActionCreator());

    const {
      data: { games },
    } = await axios.get<{ games: GameStructure[] }>("/games");

    dispatch(toggleLoadingActionCreator());

    return games;
  }, [dispatch]);

  return { getGamesApi };
};

export default useGameApi;
