import { createSlice } from "@reduxjs/toolkit";

import Place from "../models/places";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(Date.now(), action.payload);
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export default placeSlice.reducer;
