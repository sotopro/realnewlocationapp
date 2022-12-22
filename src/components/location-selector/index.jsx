import * as Location from "expo-location";
import React, { useState } from "react";
import { View, Image, Text, Alert, Button } from "react-native";

import colors from "../../utils/colors";
import MapPreview from "../map-preview";
import { styles } from "./styles";

const LocationSelector = ({ onLocationPicker }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para acceder a la ubicacion", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });

    onLocationPicker({ lat: latitude, lng: longitude });
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapPreview location={pickedLocation} style={styles.mapPreview}>
          <Text style={styles.text}>No se ha seleccionado ninguna ubicacion.</Text>
        </MapPreview>
      </View>
      <Button title="Obtener ubicacion" color={colors.primary} onPress={onHandleGetLocation} />
    </View>
  );
};

export default LocationSelector;
