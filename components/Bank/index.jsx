import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import bankData from "../../constant/bank.constant";
import Entypo from "@expo/vector-icons/Entypo";

const Bank = ({ navigation }) => {
  return (
    <View className="w-full pl-5">
      {/* heading nav */}
      <View className="flex flex-row items-center pt-14">
        <TouchableOpacity
          className=""
          onPress={() => {
            navigation.goBack("Profile");
          }}
        >
          <Image source={require("../../assets/images/LeftArrow.png")} />
        </TouchableOpacity>
        <View className="w-10/12">
          <Text className="text-xl text-center font-bold">
            Bank of account info
          </Text>
        </View>
      </View>
      {/* notification card area */}
      {bankData.map((notify) => (
        <View className="w-full pt-2 flex flex-row gap-2">
          {/* card1 */}
          <View className="w-9/12 flex flex-row pt-2 items-center">
            <View className="w-4/12">
              <Image
                className=""
                source={require("../../assets/images/notification1.png")}
              />
            </View>
            <View>
              <Text className="font-bold w-/12 text-sm">
                {notify.description}
              </Text>
              <Text className="font-bold w-/12 text-sm">{notify.place}</Text>
            </View>
          </View>
          {/* left */}
          <View className="w-3/12 items-center top-3">
            <Entypo name="dots-three-vertical" size={20} color="black" />
          </View>
        </View>
      ))}
    </View>
  );
};
export default Bank;
