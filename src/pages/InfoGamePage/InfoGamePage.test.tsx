import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import InfoGamePage from "./InfoGamePage";

describe("Given the component InfoGamePage", () => {
  describe("When InfoGamePage it is render", () => {
    test("the user should see the heading of InfoGamePage is 'Info Game'", () => {
      const expectedTitle = "Info Game";
      const tag = "heading";

      customRender(<InfoGamePage />, { isMemoryRouter: true });

      const TitleElement = screen.getByRole(tag, { name: expectedTitle });

      expect(TitleElement).toBeInTheDocument();
    });
  });
});
