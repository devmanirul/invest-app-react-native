import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.main1}>
      <Image source={require("../../assets/images/Paradisehome.png")} />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  main1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ffffff",
  },
});
