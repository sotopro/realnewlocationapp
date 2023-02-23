import { configureStore } from "@reduxjs/toolkit";

import placeReducer from "./place.slice";

export const store = configureStore({
  reducer: {
    place: placeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
