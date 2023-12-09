import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import EditGamePage from "./EditGamePage";

describe("Given the component EditGamePage", () => {
  describe("When EditGamePage it is render", () => {
    test("the user should see the heading of EditGamePage is Edit Game", () => {
      const expetedText = "Edit Game";
      const tag = "heading";

      customRender(<EditGamePage />, {
        isProvider: true,
        isMemoryRouter: true,
      });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
