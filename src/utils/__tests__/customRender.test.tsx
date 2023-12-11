import { screen } from "@testing-library/react";
import customRender, {
  ActivateCustumazerStructure,
  InitialPropsStructure,
} from "../customRender";
import Header from "../../components/Header/Header";

describe("Given the funtion customRender", () => {
  describe("When customRender is called with Header, activateCustumazer , initialProps but they are void objects", () => {
    test("Then it should render img of 'logo of valve'", () => {
      const expectedDescription = "logo of valve";
      const expectedTag = "img";
      const activateCustumazer: ActivateCustumazerStructure = {};
      const initialProps: InitialPropsStructure = {};

      customRender(<Header />, activateCustumazer, initialProps);

      const imgElement = screen.getByRole(expectedTag, {
        name: expectedDescription,
      });

      expect(imgElement).toBeInTheDocument();
    });
  });

  describe("When customRender is called with Header, activateCustumazer , initialProps but they are full", () => {
    test("Then it should render img of 'logo of valve'", () => {
      const expectedDescription = "logo of valve";
      const expectedTag = "img";
      const activateCustumazer: ActivateCustumazerStructure = {
        isMemoryRouter: true,
      };
      const initialProps: InitialPropsStructure = { initialPath: "/" };

      customRender(<Header />, activateCustumazer, initialProps);

      const imgElement = screen.getByRole(expectedTag, {
        name: expectedDescription,
      });

      expect(imgElement).toBeInTheDocument();
    });
  });

  describe("When customRender is called with only Header", () => {
    test("Then it should render img of 'logo of valve'", () => {
      const expectedDescription = "logo of valve";
      const expectedTag = "img";

      customRender(<Header />);

      const imgElement = screen.getByRole(expectedTag, {
        name: expectedDescription,
      });

      expect(imgElement).toBeInTheDocument();
    });
  });
});
