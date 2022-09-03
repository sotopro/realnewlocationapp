import { createSlice } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";

import Place from "../models/places";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(Date.now(), action.payload.title, action.payload.image);
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export const savePlace = (title, image) => {
  return async (dispatch) => {
    console.warn("image", image);
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    console.warn(Path);
    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (error) {
      console.warn("error", error);
      throw error;
    }
    dispatch(addPlace({ title, image: Path }));
  };
};

export default placeSlice.reducer;
