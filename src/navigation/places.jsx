import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from "../screens/index";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Direcciones",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 0 }}
              onPress={() => navigation.navigate("NewPlace")}>
              <Ionicons name="add" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalles de la dirección" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "Nueva dirección" }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
