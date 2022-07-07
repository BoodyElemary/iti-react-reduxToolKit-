import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../features/Cart/cartSlice";
import counterReducer from "../features/counter/counterSlice";
import gameReducer from "../features/games/gamesSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    games: gameReducer,
  },
});
