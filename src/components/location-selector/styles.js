import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  containerActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
