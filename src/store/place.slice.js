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
      const newPlace = new Place(Date.now().toString(), action.payload.title, action.payload.image);
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export const savePlace = ({ title, image }) => {
  return async (dispatch) => {
    // const fileName = image.split("/").pop();
    // const newPath = FileSystem.documentDirectory + fileName;

    try {
      // await FileSystem.copyAsync({
      //   from: image,
      //   to: newPath,
      // });
    } catch (error) {
      console.log(error);
      throw error;
    }
    dispatch(addPlace({ title, image }));
  };
};

export default placeSlice.reducer;
