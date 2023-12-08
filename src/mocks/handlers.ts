import { http, HttpResponse, PathParams } from "msw";
import { mockGames } from "../setupTests";
import { GameWithOutIdStructure } from "../store/feature/games/types";

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

  http.post<PathParams, { game: GameWithOutIdStructure }>(
    `${urlApi}/games/add`,
    async ({ request }) => {
      const { game } = await request.json();
      const id = Math.floor(Math.random() * 10000).toString();
      return HttpResponse.json({ game: { ...game, id } });
    },
  ),

  http.get(`${urlApi}/games/info/:idGame`, (req) => {
    const { idGame } = req.params;
    const game = mockGames.find((game) => game.id === idGame);
    if (game === undefined) {
      return HttpResponse.error();
    } else {
      return HttpResponse.json({ game });
    }
  }),
];
