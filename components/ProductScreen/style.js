import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    borderWidth: 4,
    borderColor: "red",
    height: "100%",
    // flex: 1
  },
  header: {
    height: 40,
    backgroundColor: "orange",
  },
  main: {
    height: "100%",
    // backgroundColor: "green",
  },
  productCard: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 3,
  },
  productCardText: {
    fontSize: 20,
    fontWeight: "semibold",
  },
  footer: {
    height: 40,
    backgroundColor: "gray",
  },
});

export default styles;
