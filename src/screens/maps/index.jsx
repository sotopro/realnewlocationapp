import IonicIcons from "@expo/vector-icons/Ionicons";
import React, { useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import colors from "../../utils/colors";
import { styles } from "./styles";

const Maps = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const initialRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHandlePickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const onHandleSaveLocation = () => {
    if (selectedLocation) navigation.navigate("NewPlace", { mapLocation: selectedLocation });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <IonicIcons name="md-save-sharp" size={24} color={colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);
  return (
    <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlePickLocation}>
      {selectedLocation && (
        <Marker
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Maps;
