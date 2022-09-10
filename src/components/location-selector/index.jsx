import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { View, Button, Text, Alert } from "react-native";

import colors from "../../utils/colors";
import MapPreview from "../map-preview";
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);
  const mapLocation = route?.params?.mapLocation;

  const onHandleGetLocation = async () => {
    const isLocationPermissionGranted = await verifyPermissions();
    if (!isLocationPermissionGranted) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });

    onLocation({ lat: latitude, lng: longitude });
  };

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso insuficientes", "Necesitamos permisos para usar la localizacion", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandlePickLocation = async () => {
    const isLocationPermissionGranted = await verifyPermissions();

    if (!isLocationPermissionGranted) return;

    navigation.navigate("Maps");
  };
  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>No has seleccionado una ubicacion</Text>
      </MapPreview>
      <View style={styles.containerActions}>
        <Button title="Obtener ubicación" onPress={onHandleGetLocation} color={colors.primary} />
        <Button
          title="Elegir desde el mapa"
          onPress={onHandlePickLocation}
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

export default LocationSelector;
