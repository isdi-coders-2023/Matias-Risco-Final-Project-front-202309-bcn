import UiSlice, {
  initialUiState,
  toggleLoadingActionCreator,
} from "../uiSlice";

describe("Given the reducer of UiSlice", () => {
  describe("When the reducer recive the actualState and the action toggleLoadingActionCreator", () => {
    test("then it should return a newState with the propety isLoading toggle", () => {
      const actualState = initialUiState;
      const expectValue = !actualState.isLoading;
      const actionToggle = toggleLoadingActionCreator();

      const newState = UiSlice(actualState, actionToggle);

      expect(newState.isLoading).toBe(expectValue);
    });
  });
});
