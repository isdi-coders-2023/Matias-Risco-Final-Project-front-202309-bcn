import { http, HttpResponse } from "msw";
import gamesMock from "./gamesMockData";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/games`, () => {
    return HttpResponse.json({ games: gamesMock });
  }),
];
