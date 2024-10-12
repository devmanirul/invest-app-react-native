import { Image, StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.main1}>
      <Image source={require("../../assets/images/Paradisehome.png")} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  main1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ffffff",
  },
});
