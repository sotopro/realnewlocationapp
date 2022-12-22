import React from "react";
import { View, Image } from "react-native";

import { URL_MAPS } from "../../constants/maps";
import { styles } from "./styles";

const MapPreview = ({ children, location, style }) => {
  const { lat, lng } = location || {};
  const mapPreviewUrl = location ? URL_MAPS(lat, lng) : null;
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  );
};

export default MapPreview;
