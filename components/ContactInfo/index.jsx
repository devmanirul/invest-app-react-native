import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { Image, TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import contantAvarter from "../../assets/images/contantAvarter.png";
import Feather from "@expo/vector-icons/Feather";

const ContactInfo = ({ navigation }) => {
  const [image, setImage] = useState(contantAvarter);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="pt-20 pl-4 w-full">
      {/* heading start */}
      <View className=" flex flex-row items-center">
        <TouchableOpacity
          className="w-1/12"
          onPress={() => {
            navigation.goBack("Profile");
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View className="w-11/12">
          <Text className="text-2xl font-bold text-center">Contact info</Text>
        </View>
      </View>
      {/* heading end */}
      {/* Profile file pic */}
      <View className="mt-5 w-40 h-40 rounded-full relative mx-auto">
        <Image source={{ uri: image }} className="w-full h-full rounded-full" />
        <View className="bg-black/30 absolute inset-0 z-10 h-full w-full rounded-full"></View>
        {/* <Button title="Pick an image from camera roll"  />
        {image && <Image source={{ uri: image }} className="h-20 w-20 rounded-full mx-auto mt-5" />} */}
        <TouchableOpacity
          onPress={pickImage}
          className="absolute top-14 left-20 z-10"
        >
          <Feather name="edit-2" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ContactInfo;
