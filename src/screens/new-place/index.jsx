import { View, Text, ScrollView, TextInput, Button } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput style={styles.input} placeholder="Escribe el lugar" />
        <Button color={colors.primary} title="Guardar direccion" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
