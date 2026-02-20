
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    default: () => null,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
