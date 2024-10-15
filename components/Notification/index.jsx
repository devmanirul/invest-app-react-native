import { Image, StyleSheet, Text, View } from "react-native";

const Notification = () => {
  return (
    <View>
      <View style={styles.leftArrow}>
        <Image source={require("../../assets/images/LeftArrow.png")} />
      </View>
      <Text style={styles.notificationText}>Notifiction</Text>
      <View>{/* card1 */}</View>
    </View>
  );
};
export default Notification;
const styles = StyleSheet.create({
  leftArrow: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  notificationText: {
    paddingTop: 30,
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});

//  <Stack.Screen name="Notification" component={Notification} />;
