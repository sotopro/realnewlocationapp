import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector } from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(savePlace({ title, image }));
    navigation.navigate("Places");
  };

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onImagePicker = (uri) => {
    setImage(uri);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          onChangeText={onHandleChange}
          style={styles.input}
          placeholder="Escribe el lugar"
        />
        <ImageSelector onImagePicker={onImagePicker} />
        <Button color={colors.primary} title="Guardar direccion" onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
