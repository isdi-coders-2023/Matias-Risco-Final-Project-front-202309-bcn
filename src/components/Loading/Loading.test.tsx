import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import Loading from "./Loading";

describe("Given the compponent Loading", () => {
  describe("When it is render", () => {
    test("Then it should display by screnn Loading...", () => {
      const tag = "heading";
      const expectedText = "Loading...";

      customRender(<Loading />);

      const HeadingElement = screen.getByRole(tag, { name: expectedText });

      expect(HeadingElement).toBeInTheDocument();
    });
  });
});
