import React, { useState } from "react";
import { View, Image, Text, Alert, Button } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationSelector = ({ onLocationPicker }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const onHandleGetLocation = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedLocation ? (
          <Text style={styles.title}>No hay una ubicacion seleccionada</Text>
        ) : (
          <Image style={styles.image} />
        )}
      </View>
      <Button title="Obtener ubicacion" color={colors.primary} onPress={onHandleGetLocation} />
    </View>
  );
};

export default LocationSelector;
