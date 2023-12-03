import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import NotFoundPage from "./NotFoundPage";

describe("Given the component NotFoundPage", () => {
  describe("When NotFoundPage it is render", () => {
    test("the user should see the heading of NotFoundPage is Error and Page not Found", () => {
      const expectedTitle = "Error";
      const expectedError = "Page not Found";
      const tag = "heading";

      customRender(<NotFoundPage />);

      const TitleElement = screen.getByRole(tag, { name: expectedTitle });
      const ErrorTextElement = screen.getByRole(tag, { name: expectedError });

      expect(TitleElement).toBeInTheDocument();
      expect(ErrorTextElement).toBeInTheDocument();
    });
  });
});
