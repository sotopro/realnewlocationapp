import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { PlaceItem } from "../../components";
import { loadPlaces } from "../../store/place.slice";
import { styles } from "./styles";

const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.empty}>No places yet</Text>
    </View>
  );
  return (
    <FlatList
      data={places}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default PlaceList;
