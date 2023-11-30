import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import NavigationBar from "./NavigationBar";

describe("Given the component NavigationBar", () => {
  describe("When it is render", () => {
    test("Then it should display by screnn button Home, Login and Add", () => {
      const buttonTag = "button";
      const homeButtonText = "button Home";
      const loginButtonText = "button Login";
      const addButtonText = "button Add";

      customRender(<NavigationBar />);
      const homeButtonElement = screen.getByRole(buttonTag, {
        name: homeButtonText,
      });
      const loginButtonElement = screen.getByRole(buttonTag, {
        name: loginButtonText,
      });
      const addButtonElement = screen.getByRole(buttonTag, {
        name: addButtonText,
      });

      expect(homeButtonElement).toBeInTheDocument();
      expect(loginButtonElement).toBeInTheDocument();
      expect(addButtonElement).toBeInTheDocument();
    });
  });
});
