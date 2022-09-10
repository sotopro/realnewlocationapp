import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

import { styles } from "./styles";

const PlaceItem = ({ id, title, image, onSelect, address }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
