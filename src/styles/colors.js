import { StyleSheet } from "react-native";

// CSS doesnt work in RN, maybe try native wind later but first use basic approach
// TODO: Rename this file to something better and fixup the imports (maybe split into diff files)
export const buttonStyling = StyleSheet.create({
  container: {
    backgroundColor: "#537b93",
    height: 30,
  },
  text: {
    color: "#43b30b",
  },
});

export const homeScreenStyling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2eceeb",
    alignItems:"center",
    justifyContent: "center"
  },
  gameTitle: {
    color: "#d14e11",
    fontWeight: "bold",
    fontSize: 30,
  },
});
