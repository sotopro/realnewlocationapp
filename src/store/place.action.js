export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    placeName,
  };
};
