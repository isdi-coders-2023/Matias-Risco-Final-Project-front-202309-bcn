import { http, HttpResponse } from "msw";

const urlApi = import.meta.env.VITE_API_URL;

export const handlersError = [
  http.get(`${urlApi}/games`, () => {
    return HttpResponse.error();
  }),

  http.delete(`${urlApi}/games/delete/:idGame`, () => {
    return HttpResponse.error();
  }),
];
