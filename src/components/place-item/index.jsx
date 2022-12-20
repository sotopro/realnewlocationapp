import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import { styles } from "./styles";

const PlaceItem = ({ id, title, image, onSelect }) => {
  console.warn("image", image);
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
