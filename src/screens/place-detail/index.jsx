import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import MapPreview from "../../components/map-preview";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;

  const place = useSelector((state) => state.place.places.find((place) => place.id === placeId));
  const { title, image, address, coords } = place || {};
  const location = JSON.parse(coords);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: location.lat, lng: location.lng }}>
          <Text>La ubicacion no esta disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
