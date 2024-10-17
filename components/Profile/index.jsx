import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Footer from "../shared/Footer";
import { ScrollView } from "react-native";
import ProfileData from "../../constant/profileData";
import ProfileInfo from "./ProfileInfoCard";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.body}>
      {/* header */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack("HomePage");
        }}
      >
        <Image source={require("../../assets/images/LeftArrow.png")} />
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>
      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileImage}>
          <Image source={require("../../assets/images/profileImg.png")} />
          <Text style={styles.nameText}>Jonas Macroni</Text>
          <Text style={styles.expert}>Expert</Text>
        </View>
        <View>
          {ProfileData.map((data) => (
            <ProfileInfo key={data.id} {...data} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  body: {
    padding: 15,
    paddingTop: 40,
    height: "100%",
    backgroundColor: "#D3D2D2",
  },
  title: { fontSize: 26, fontWeight: "bold", marginTop: 15, marginBottom: 15 },
  main: { height: "100%" },
  profileImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "semibold",
    marginTop: 15,
    marginBottom: 7,
  },
  expert: { fontSize: 17 },
});
