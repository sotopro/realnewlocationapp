import { createSlice } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";

import { getPlaces, insertPlace } from "../db";
import Place from "../model/Place";
import { URL_GEOCODING } from "../utils/maps";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        action.payload.id,
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const { addPlace, setPlaces } = placeSlice.actions;

export const savePlace = (title, image, coords) => {
  return async (dispatch) => {
    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

    if (!response.ok) throw new Error("Something went wrong!");

    const data = await response.json();

    if (!data.results) throw new Error("Something went wrong!");

    const address = data.results[0].formatted_address;
    // const fileName = image.split("/").pop();
    // const path = FileSystem.documentDirectory + fileName;
    try {
      // await FileSystem.moveAsync({
      //   from: image,
      //   to: path,
      // });
      const result = await insertPlace(title, image, address, coords);
      dispatch(addPlace({ id: result.insertId, title, image, address, coords }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const result = await getPlaces();
      dispatch(setPlaces(result?.rows?._array));
    } catch (err) {
      throw err;
    }
  };
};

export default placeSlice.reducer;
