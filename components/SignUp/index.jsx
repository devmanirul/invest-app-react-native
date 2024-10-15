import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.main2}>
      <Image
        style={styles.img}
        source={require("../../assets/images/SignUp.png")}
      />
      <View style={styles.div2}>
        <Text style={styles.text1}>Stay on top of your finance with us.</Text>
        <Text style={styles.text2}>
          We are your new financial Advisors to recommed the best investments
          for you.
        </Text>
      </View>
      {/* button area */}
      <View style={styles.btnArea}>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("CreateAccount")}
            style={styles.button}
          >
            Create account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    height: "100%",
    backgroundColor: "#FAFAFA",
  },
  img: {
    height: "30%",
    width: "70%",
  },
  div2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  text2: {
    fontWeight: "medium",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  btnArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#31A062",
    borderRadius: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  LoginText: {
    color: "#31A062",
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
