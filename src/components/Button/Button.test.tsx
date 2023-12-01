import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given the component Button", () => {
  describe("When Button it is render and clicked by the user", () => {
    test("then the function onClick should be called", async () => {
      const buttonName = "click me";
      const onClick = vitest.fn();

      customRender(<Button onClick={onClick}>{buttonName}</Button>);

      const ButtonElement = screen.getByRole("button", {
        name: buttonName,
      });
      await userEvent.click(ButtonElement);

      expect(onClick).toBeCalled();
    });
  });
});
