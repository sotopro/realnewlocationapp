import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector } from "../../components";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(addPlace({ title }));
    navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
  };

  const onImage = (uri) => {
    console.warn(uri);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lugar</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del lugar"
          onChangeText={onHandlerChange}
          value={title}
        />
        <ImageSelector onImage={onImage} />
        <Button
          disabled={title.length === 0}
          color={colors.primary}
          title="Guardar"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
