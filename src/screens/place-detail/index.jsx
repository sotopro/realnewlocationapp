import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import { MapPreview } from "../../components/index";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;

  const place = useSelector((state) => state.place.places.find((place) => place.id === placeId));
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: place.coords.lat, lng: place.coords.lng }}>
          <Text>Ubicacion no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
