import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import notificationData from "../../constant/notification";

const Notification = ({ navigation }) => {
  return (
    <View className="w-full pl-5">
      <TouchableOpacity
        className="pt-12"
        onPress={() => navigation.goBack("HomePage")}
      >
        <Image source={require("../../assets/images/LeftArrow.png")} />
      </TouchableOpacity>
      <Text className="pt-7 text-3xl font-bold">Notifiction</Text>
      {/* notification card area */}
      {notificationData.map((notify) => (
        <View className="w-full pt-2 flex flex-row gap-2">
          {/* card1 */}
          <View className="w-9/12 flex flex-row pt-2  justify-center items-center">
            <View className="w-4/12">
              <Image
                className=""
                source={require("../../assets/images/notification1.png")}
              />
            </View>
            <Text className="font-bold w-8/12 text-sm">
              {notify.description}
            </Text>
          </View>
          {/* left */}
          <View className="w-3/12">
            <Text>{notify.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default Notification;
