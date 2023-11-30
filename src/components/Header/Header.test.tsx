import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import Header from "./Header";

describe("Given the component Header", () => {
  describe("When the component it is render", () => {
    test("Then there should be in screen a image of 'logo of valve'", () => {
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
