import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { View, Image, Text, Alert, Button } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImagePicker }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const onHandleTakeImage = async () => {
    const isCameraPermissions = await verifyPermissions();
    if (!isCameraPermissions) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    console.warn("image", image);

    setPickedUrl(image.uri);
    onImagePicker(image.uri);
  };

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la cámara", [
        { text: "Ok" },
      ]);

      return false;
    }
    return true;
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text style={styles.title}>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar Foto" color={colors.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
