import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import React, { useState } from "react";
import { View, Image, Text, Alert, Button } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para usar la cámara", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar foto" color={colors.secondary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
