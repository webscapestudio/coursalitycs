import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "./slices/counter";

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
}

export const store = makeStore();
export const wrapper = createWrapper(makeStore);
