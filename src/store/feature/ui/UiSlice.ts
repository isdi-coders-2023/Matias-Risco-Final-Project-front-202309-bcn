import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

export const initialUiState: UiStateStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "uiState",
  initialState: initialUiState,
  reducers: {
    toggleLoading: (currentState): UiStateStructure => ({
      ...currentState,
      isLoading: !currentState.isLoading,
    }),
  },
});

export default uiSlice.reducer;
export const { toggleLoading } = uiSlice.actions;
