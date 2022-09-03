import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import PlacesNavigator from "./places";

export default () => (
  <NavigationContainer>
    <PlacesNavigator />
  </NavigationContainer>
);
