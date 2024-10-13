import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
const HomePage = () => {
  return (
    <View>
      <View>
        <Image
          style={styles.img}
          source={require("../../assets/images/menu.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/images/bell.png")}
        />
      </View>
    </View>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
