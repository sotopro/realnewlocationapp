import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: "100%",
    height: 180,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
