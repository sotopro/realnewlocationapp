import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector } from "../../components";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    dispatch(addPlace(title));
    navigation.navigate("Places");
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
        <ImageSelector onImage={() => null} />
        <Button title="Grabar dirección" color={colors.primary} onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
