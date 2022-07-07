import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
});
export default gameSlice;
