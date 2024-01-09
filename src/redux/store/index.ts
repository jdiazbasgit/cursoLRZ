import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "src/redux/slices"

const IS_DEV = process.env.NODE_ENV === "development" ? true : false

const store = configureStore({
  reducer: rootReducer,
  devTools: IS_DEV
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store