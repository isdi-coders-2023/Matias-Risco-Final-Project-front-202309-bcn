import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import HomePage from "./HomePage";
import gamesData from "../../data/gamesData";
import * as dispacher from "../../store/hooks";
import { Dispatch } from "react";
import { AnyAction, CombinedState, ThunkDispatch } from "@reduxjs/toolkit";
import { GameStateStructure } from "../../store/feature/games/types";

describe("Given the component HomePage", () => {
  describe("When HomePage it is render", () => {
    test("the user should see the heading of HomePage is Games", () => {
      const expetedText = "Games";
      const tag = "heading";

      customRender(<HomePage />, { isProvider: true, isMemoryRouter: true });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When HomePage it is render", () => {
    test("the user should see the heading of Portal and Counter Strike 2", () => {
      const portal = gamesData[0];
      const counterStrike = gamesData[1];
      const headingTag = "heading";

      customRender(
        <HomePage />,
        { isProvider: true, isMemoryRouter: true },
        { preloadedState: { gameState: { games: gamesData } } },
      );

      const portalHeadingElement = screen.getByRole(headingTag, {
        name: portal.name,
      });

      const counterStrikeHeadingElement = screen.getByRole(headingTag, {
        name: counterStrike.name,
      });

      expect(portalHeadingElement).toBeInTheDocument();
      expect(counterStrikeHeadingElement).toBeInTheDocument();
    });
  });

  describe("When HomePage it is render", () => {
    test("then the dispach should benn called with information of Portal and Counter Strike 2", () => {
      const logSpy = vitest.spyOn(dispacher, "useAppDispatch");
      const dispatch = vitest.fn();
      logSpy.mockReturnValue(
        dispatch as unknown as ThunkDispatch<
          CombinedState<{ gameState: GameStateStructure }>,
          undefined,
          AnyAction
        > &
          Dispatch<AnyAction>,
      );

      customRender(<HomePage />, { isProvider: true, isMemoryRouter: true });

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ payload: gamesData }),
      );
      logSpy.mockClear();
    });
  });
});
