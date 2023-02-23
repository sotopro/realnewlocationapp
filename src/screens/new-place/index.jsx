import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

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
