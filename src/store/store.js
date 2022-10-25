import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "./slices/counter";
import expertsReducer from "./slices/experts";

export function makeStore() {
  return configureStore({
    reducer: {
      experts: expertsReducer,
    },
  });
}

export const store = makeStore();
export const wrapper = createWrapper(makeStore);
