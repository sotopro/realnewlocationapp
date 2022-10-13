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
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="new location"
          onChangeText={onHandleChange}
          value={title}
        />
        <ImageSelector onImage={() => null} />
        <Button title="Save Place" onPress={onHandleSubmit} color={colors.primary} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
