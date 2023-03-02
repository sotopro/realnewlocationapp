import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector, LocationSelector } from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(savePlace(title, image, coords));
    navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
  };

  const onImage = (uri) => {
    setImage(uri);
  };
  const onLocation = (location) => {
    setCoords(location);
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
        <LocationSelector onLocation={onLocation} />
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
