import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import Header from "./Header";

describe("Given the component Header", () => {
  describe("When the component it is render", () => {
    test("Then there should be in screen a banner of 'valve Pipe'", () => {
      const expectedDescription = "valve Pipe";
      const expectedTag = "banner";

      customRender(<Header />);

      const imgElement = screen.getByRole(expectedTag, {
        name: expectedDescription,
      });

      expect(imgElement).toBeInTheDocument();
    });
  });
});
