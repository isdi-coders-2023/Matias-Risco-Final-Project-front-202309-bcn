import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import NavigationBar from "./NavigationBar";

describe("Given the component NavigationBar", () => {
  describe("When it is render", () => {
    test("Then it should display by screnn link Home", () => {
      const linkTag = "link";
      const homeButtonText = "link Home";

      customRender(
        <NavigationBar />,
        { isMemoryRouter: true },
        { initialPath: "/home" },
      );
      const homeButtonElement = screen.getByRole(linkTag, {
        name: homeButtonText,
      });

      expect(homeButtonElement).toBeInTheDocument();
    });

    test("Then it should display by screnn link Login", () => {
      const linkTag = "link";
      const loginButtonText = "link Login";

      customRender(
        <NavigationBar />,
        { isMemoryRouter: true },
        { initialPath: "/login" },
      );

      const loginButtonElement = screen.getByRole(linkTag, {
        name: loginButtonText,
      });

      expect(loginButtonElement).toBeInTheDocument();
    });

    test("Then it should display by screnn link Add", () => {
      const linkTag = "link";
      const addButtonText = "link Add";

      customRender(
        <NavigationBar />,
        { isMemoryRouter: true },
        { initialPath: "/game/add" },
      );

      const addButtonElement = screen.getByRole(linkTag, {
        name: addButtonText,
      });

      expect(addButtonElement).toBeInTheDocument();
    });
  });
});
