import "@testing-library/jest-dom";
import { GameStructure } from "./store/feature/games/types";
import gamesMock from "./mocks/gamesMockData";
import { server } from "./mocks/main";

export let mockGames: GameStructure[] = gamesMock;

beforeAll(() => {
  mockGames = gamesMock;
  return server.listen();
});

afterEach(() => {
  mockGames = gamesMock;
  return server.resetHandlers();
});

afterAll(() => server.close());
