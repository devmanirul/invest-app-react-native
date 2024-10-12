import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

// 1st screen
// const ParaDise = () => {
//   return (
//     <View style={styles.main1}>
//       <Image source={require("./assets/images/Paradisehome.png")} />
//     </View>
//   );
// };
// export default ParaDise;

// const styles = StyleSheet.create({
//   main1: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%",
//     backgroundColor: "#ffffff",
//   },
// });

// 2nd screen

const App = () => {
  return (
    <View style={styles.main2}>
      <Image
        style={styles.img}
        source={require("./assets/images/SignUp.png")}
      />
      <View style={styles.div2}>
        <Text style={styles.text1}>Stay on top of your finance with us.</Text>
        <Text style={styles.text2}>
          We are your new financial Advisors to recommed the best investments
          for you.
        </Text>
      </View>
      <View style={styles.div3}>
        <Button
          style={styles.button}
          // onPress={onPressCreateAccount}
          title="Create account"
          color="#31A062"
        />
        <Text style={styles.text3}>Login</Text>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    height: "100%",
    backgroundColor: "#F",
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
  div3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  text3: {
    color: "#31A062",
    marginTop: 10,
  },
});

// 3rd screen

// const App = () => {
//   return (
//     <View>
//       <View style={styles.img}>
//         <Image source={require("./assets/images/LeftArrow.png")} />
//       </View>
//       <View style={styles.main2}>
//         <View style={styles.div2}>
//           <Text style={styles.text1}>Create an account</Text>
//           <Text style={styles.text2}>Invest and double your income now</Text>
//         </View>
//         <View style={styles.inputDiv}>
//           <TextInput style={styles.textInput1} placeholder="Full name" />
//           <TextInput style={styles.textInput1} placeholder="Email address" />
//           <TextInput style={styles.textInput2} placeholder="Password" />
//         </View>
//         <View style={styles.div3}>
//           <Button
//             // onPress={onPressCreateAccount}
//             title="Create account"
//             color="#31A062"
//           />
//           <Text style={styles.text3}>Already have an account?</Text>
//         </View>
//       </View>
//     </View>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   img: {
//     marginTop: 100,
//     marginLeft: 20,
//     height: "3%",
//     width: "7%",
//   },
//   main2: {
//     marginTop: 20,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 25,
//     backgroundColor: "#FFFFFF",
//   },
//   div2: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingLeft: 30,
//     paddingRight: 30,
//   },
//   text1: {
//     fontWeight: "bold",
//     fontSize: 30,
//     textAlign: "center",
//   },
//   text2: {
//     fontWeight: "medium",
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 10,
//   },
//   inputDiv: {
//     width: "100%",
//     marginLeft: 25,
//     marginRight: 25,
//     display: "flex",
//     gap: 25,
//   },
//   textInput1: {
//     height: "40",
//     marginLeft: 20,
//     marginRight: 20,
//     borderWidth: 1,
//     paddingRight: 10,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 15,
//     borderRadius: 10,
//   },
//   textInput2: {
//     height: "40",
//     marginLeft: 20,
//     marginRight: 20,
//     paddingRight: 10,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 15,
//     borderRadius: 10,
//   },
//   div3: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//   },
//   button: {},
//   text3: {
//     color: "#31A062",
//     marginTop: 20,
//   },
// });
