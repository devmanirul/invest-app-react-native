import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
const ContactInfo = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack("Profile");
        }}
      >
        <Image source={require("../../assets/images/LeftArrow.png")} />
      </TouchableOpacity>
    </View>
  );
};
export default ContactInfo;
const styles = StyleSheet.create({
  body: {
    paddingTop: 40,
    paddingLeft: 20,
  },
});

{
  /* <View style={styles.body}> */
}
{
  /* header */
}
//
//   <Text style={styles.title}>Profile</Text>
{
  /* main */
}
//   <ScrollView>
//     <View style={styles.imageSection}>
//       <Image source={require("../../assets/images/profileImg.png")} />
//       <Text style={styles.nameText}>Jonas Macroni</Text>
//       <Text style={styles.expert}>Expert</Text>
//     </View>
//     <View>
//       {ProfileData.map((data) => (
//         <ProfileInfo key={data.id} {...data} />
//       ))}
//     </View>
//   </ScrollView>
//   <Footer navigation={navigation} />
// </View>
