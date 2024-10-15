import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import notificationData from "../../constant/notification";

const Notification = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.goBack("HomePage")}
        style={styles.leftArrow}
      >
        <Image source={require("../../assets/images/LeftArrow.png")} />
      </TouchableOpacity>
      <Text style={styles.notificationText}>Notifiction</Text>
      {/* notification card area */}
      {notificationData.map((notify) => (
        <View style={styles.notificationCard}>
          {/* card1 */}
          <View style={styles.notificationOneL}>
            <View>
              <Image
                source={require("../../assets/images/notification1.png")}
              />
            </View>
            <Text style={styles.notificationCardText}>
              Apple stocks just increased Check it out now.
            </Text>
          </View>
          <View style={styles.notificationOneR}>
            <Text>15min ago</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default Notification;
const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
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
  notificationCard: {
    paddingTop: 30,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    // width: "100%"
  },
  notificationOneL: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "70%",
    paddingLeft: 25,
  },
  notificationCardText: {
    fontWeight: "bold",
  },
  notificationOneR: {
    width: "30%",
  },
});

//  <Stack.Screen name="Notification" component={Notification} />;
