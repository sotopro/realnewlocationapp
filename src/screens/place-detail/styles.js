import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "40%",
    width: "100%",
    minHeight: 300,
  },
  content: {
    width: "100%",
    backgroundColor: colors.white,
    shadowOpacity: 0.26,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 15,
  },
  address: {
    color: colors.primary,
    textAlign: "center",
  },
  map: {
    height: 300,
  },
});
