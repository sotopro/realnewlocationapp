import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

import { styles } from "./styles";

const PlaceItem = ({ id, title, image, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
