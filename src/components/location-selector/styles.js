import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
