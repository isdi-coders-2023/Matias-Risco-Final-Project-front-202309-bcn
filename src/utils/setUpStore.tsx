import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { rootReducer } from "../store";

type RootState = ReturnType<typeof rootReducer>;

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
