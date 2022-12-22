import { createSlice } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";

import { URL_GEOCODING } from "../constants/maps";
import Place from "../models/places";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        Date.now().toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export const savePlace = ({ title, image, coords }) => {
  return async (dispatch) => {
    // const fileName = image.split("/").pop();
    // const newPath = FileSystem.documentDirectory + fileName;

    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

      if (!response.ok) throw new Error("No se ha podido conectar al servicio");

      const data = await response.json();

      if (!data.results) throw new Error("No se ha podido encontrar la direccion");

      const address = data.results[0].formatted_address;
      // await FileSystem.copyAsync({
      //   from: image,
      //   to: newPath,
      // });
      dispatch(addPlace({ title, image, address, coords }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export default placeSlice.reducer;
