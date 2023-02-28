import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { PlaceItem } from "../../components";
import { styles } from "./styles";

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;
