import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import NavigationBar from "./NavigationBar";

describe("Given the component NavigationBar", () => {
  describe("When it is render", () => {
    test("Then it should display by screnn link Home, Login and Add", () => {
      const linkTag = "link";
      const homeButtonText = "link Home";
      const loginButtonText = "link Login";
      const addButtonText = "link Add";

      customRender(<NavigationBar />, { isMemoryRouter: true });
      const homeButtonElement = screen.getByRole(linkTag, {
        name: homeButtonText,
      });
      const loginButtonElement = screen.getByRole(linkTag, {
        name: loginButtonText,
      });
      const addButtonElement = screen.getByRole(linkTag, {
        name: addButtonText,
      });

      expect(homeButtonElement).toBeInTheDocument();
      expect(loginButtonElement).toBeInTheDocument();
      expect(addButtonElement).toBeInTheDocument();
    });
  });
});
