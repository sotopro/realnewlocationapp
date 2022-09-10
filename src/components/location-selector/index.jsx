import * as Location from "expo-location";
import React, { useState } from "react";
import { View, Button, Text, Alert } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);
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
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedLocation ? (
          <Text>No hay ubicación seleccionada</Text>
        ) : (
          <Text>{`latitud: ${pickedLocation.lat}, logitude: ${pickedLocation.lng}`}</Text>
        )}
      </View>
      <Button title="Obtener ubicación" onPress={onHandleGetLocation} color={colors.primary} />
    </View>
  );
};

export default LocationSelector;
