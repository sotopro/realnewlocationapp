import { createSlice } from "@reduxjs/toolkit";

import { getPlaces, insertPlace } from "../db";
import Place from "../models/places";
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
        action.payload.id.toString(),
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
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

      if (!response.ok) {
        throw new Error("No se ha podido conectar cone el servicio de geolocalización");
      }

      const data = await response.json();
      if (!data.results) throw new Error("No se ha podido encontrar la dirección");

      const address = data.results[0].formatted_address;
      const result = await insertPlace(title, image, address, coords);
      console.warn("result", result);
      dispatch(addPlace({ id: result.insertId, title, image, address, coords }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const result = await getPlaces();
      dispatch(setPlaces(result?.rows?._array));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export default placeSlice.reducer;
