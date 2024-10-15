import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomePage")}
        style={styles.footerCard}
      >
        <Image source={require("../../../assets/images/footerHome.png")} />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductScreen")}
        style={styles.footerCard}
      >
        <Image source={require("../../../assets/images/footerSearch.png")} />
        <Text style={styles.footerText}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerCard}>
        <Image
          source={require("../../../assets/images/transactionArrow.png")}
        />
        <Text style={styles.footerText}>Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.footerCard}
      >
        <Image source={require("../../../assets/images/profileImge.png")} />
        <Text style={styles.footerText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  footer: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerCard: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footerText: { color: "#32A078" },
  guideViewHeading: {
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 22,
  },
});
