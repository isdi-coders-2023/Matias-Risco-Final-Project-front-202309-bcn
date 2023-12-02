import axios from "axios";
import { useCallback } from "react";
import { GameStructure } from "../store/feature/games/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useGameApi = () => {
  const getGamesApi = useCallback(async (): Promise<GameStructure[]> => {
    const {
      data: { games },
    } = await axios.get<{ games: GameStructure[] }>("/games");
    return games;
  }, []);

  return { getGamesApi };
};

export default useGameApi;
