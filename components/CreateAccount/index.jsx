import { TouchableOpacity } from "react-native";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const CreateAccount = ({ navigation }) => {
  return (
    <View style={styles.mainBg}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.img}>
        <Image source={require("../../assets/images/LeftArrow.png")} />
      </TouchableOpacity>
      <View style={styles.main2}>
        <View style={styles.div2}>
          <Text style={styles.text1}>Create an account</Text>
          <Text style={styles.text2}>Invest and double your income now</Text>
        </View>
        <View style={styles.inputDiv}>
          <TextInput style={styles.textInput1} placeholder="Full name" />
          <TextInput style={styles.textInput1} placeholder="Email address" />
          <TextInput style={styles.textInput2} placeholder="Password" />
        </View>
        {/* btn area */}
        <View style={styles.btnArea}>
          <TouchableOpacity>
            <Text style={styles.button}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.LoginText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CreateAccount;

const styles = StyleSheet.create({
  mainBg: {
    height: "100%",
    backgroundColor: "white",
  },
  img: {
    marginTop: 100,
    marginLeft: 20,
    height: "7%",
    width: "7%",
  },
  main2: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    backgroundColor: "#FFFFFF",
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
  inputDiv: {
    width: "100%",
    marginLeft: 25,
    marginRight: 25,
    display: "flex",
    gap: 25,
  },
  textInput1: {
    height: "40",
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 10,
  },
  textInput2: {
    height: "40",
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 10,
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
  },
});
