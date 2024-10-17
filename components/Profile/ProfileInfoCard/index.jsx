import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ProfileInfo = ({ icon, image, name, title, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
      <View style={styles.card}>
        <View style={styles.img}>
          <Image source={image} />
        </View>
        <Text style={styles.cardText}>{title}</Text>
        <View style={styles.icon}>
          <Image source={icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 22,
    paddingBottom: 22,
    marginBottom: 12,
    borderRadius: 5,
  },
  img: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: { width: "60%", fontSize: 18, fontWeight: "bold" },
  icon: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
