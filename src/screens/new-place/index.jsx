import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector, LocationSelector } from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState(null);

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, location));
    navigation.navigate("Places");
  };

  const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
  };

  const onHandleLocationSelect = (location) => {
    setLocation(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nuevo ubicacion"
          onChangeText={onHandleChange}
          value={title}
        />
        <ImageSelector onImage={onHandleImageSelect} />
        <LocationSelector onLocation={onHandleLocationSelect} />
        <Button title="Grabar dirección" color={colors.primary} onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
