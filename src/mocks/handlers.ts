import { http, HttpResponse } from "msw";
import { mockGames } from "../setupTests";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/games`, () => {
    return HttpResponse.json({ games: mockGames });
  }),
  http.delete(`${urlApi}/games/delete/:idGame`, (req) => {
    const { idGame } = req.params;
    const gameIndex = mockGames.findIndex((game) => game.id === idGame);
    if (gameIndex === -1) {
      return HttpResponse.error();
    } else {
      const game = mockGames.splice(gameIndex, 1);
      return HttpResponse.json({ game });
    }
  }),
];
