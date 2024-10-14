import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import image from "../../assets/images/Card1.png";
import image1 from "../../assets/images/Card2.png";
import image2 from "../../assets/images/Card3.png";
// import guide1 from "../../assets/images/guide1.png";
// import guide2 from "../../assets/images/guide2.png";

// const investGuide = [
//   {
//     id: 1,
//     title: "Basic type of investments",
//     description:
//       "This is how you set your foot for 2020 Stock market recession. What’s next...",
//     img: "guide1",
//   },
//   {
//     id: 2,
//     title: "How much can you start",
//     description:
//       "What do you like to see? It’s a very different market from 2018. The way...",
//     img: "guide2",
//   },
// ];

const Homepage = () => {
  return (
    <View style={styles.body}>
      {/* navbar */}
      <View style={styles.navbarContainer}>
        <TouchableOpacity>
          <Image source={require("../../assets/images/menu.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/images/bell.png")} />
        </TouchableOpacity>
      </View>
      {/* main */}
      <ScrollView style={styles.main}>
        <Text style={styles.welcomeText}>Welcome, Jessie.</Text>
        {/* hero section */}
        <View style={styles.assetCard}>
          <Text style={styles.yourAssetText}>Your total asset portfolio</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amountN}>N203,935</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Invest Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bestPlan}>
          {/* best plan */}
          <View style={styles.bestPlanText}>
            <Text style={styles.bestPlanTextLeft}>Best Plans</Text>
            <TouchableOpacity style={styles.bestPlanRight}>
              <Text style={styles.bestPlanTextRight}>See All &rarr;</Text>
            </TouchableOpacity>
          </View>
          {/* best plan card */}
          <ScrollView horizontal={true} style={styles.sliderContainer}>
            {/* card 1 */}
            <View style={styles.card}>
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.bgImage}
              >
                <Text style={styles.cardText1}>Gold</Text>
                <Text style={styles.cardText2}>30% Return</Text>
              </ImageBackground>
            </View>
            {/* card 2 */}
            <View style={styles.card}>
              <ImageBackground
                source={image1}
                resizeMode="cover"
                style={styles.bgImage}
              >
                <Text style={styles.cardText1}>Silver</Text>
                <Text style={styles.cardText2}>60% Return</Text>
              </ImageBackground>
            </View>
            {/* card 3 */}
            <View style={styles.card}>
              <ImageBackground
                source={image2}
                resizeMode="cover"
                style={styles.bgImage}
              >
                <Text style={styles.cardText1}>Platinum</Text>
                <Text style={styles.cardText2}>90% Return</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
        {/* invesment guide */}
        {/* <View>
          <Text style={styles.guideViewHeading}>Investment Guide</Text> */}
          {/* invesmesnt card1 */}
          {/* <View style={styles.guideView}>
            <View style={styles.guide1}>
              <Text style={styles.guide1Text1}>Basic type of investments</Text>
              <Text style={styles.guide1Text2}>
                This is how you set your foot for 2020 Stock market recession.
                What’s next...
              </Text>
            </View>
            <View style={styles.guide2}>
              <View style={styles.main1}>
                <Image source={require("../../assets/images/guide1.png")} />
              </View>
            </View>
          </View>
          <View style={styles.horizontal}></View> */}
          {/* invesmesnt card2 */}
          {/* <View style={styles.guideView}>
            <View style={styles.guide1}>
              <Text style={styles.guide1Text1}>How much can you start</Text>
              <Text style={styles.guide1Text2}>
                What do you like to see? It’s a very different market from 2018.
                The way...
              </Text>
            </View> */}
            {/* <View style={styles.guide2}>
              <View style={styles.main1}>
                <Image source={require("../../assets/images/guide2.png")} />
              </View>
            </View>
          </View>
        </View> */}
      </ScrollView>
      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/footerHome.png")} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/footerSearch.png")} />
          <Text style={styles.footerText}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/transactionArrow.png")} />
          <Text style={styles.footerText}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/profileImge.png")} />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  body: { marginTop: 40, marginRight: 15, marginLeft: 15 },
  navbarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    borderWidth: 1,
    borderBottomColor: "black",
  },
  main: {
    // height: "100%",
    borderWidth: 1,
    borderBottomColor: "black",
  },
  welcomeText: { fontSize: 30, fontWeight: "bold", lineHeight: 44 },
  assetCard: {
    backgroundColor: "#31A078",
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 25,
    marginTop: 25,
    borderRadius: 20,
  },
  amountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  yourAssetText: { color: "white", fontSize: 14, fontWeight: "medium" },
  amountN: { color: "white", fontSize: 28, fontWeight: "semibold" },
  button: {
    backgroundColor: "#FEFEFE",
    paddingLeft: 18,
    paddingRight: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 8,
    paddingBottom: 1,
    marginTop: 3,
    marginBottom: 3,
  },
  buttonText: { color: "#31A078", fontSize: 14, fontWeight: "semibold" },
  bestPlan: { paddingTop: 20 },
  bestPlanText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bestPlanTextLeft: { fontSize: 22, fontWeight: "bold" },
  bestPlanRight: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  bestPlanTextRight: {
    color: "#FE555D",
    fontSize: 18,
    fontWeight: "medium",
    alignContent: "center",
  },
  sliderContainer: { marginTop: 14 },
  card: { marginRight: 10 },
  bgImage: {
    height: 160,
    width: 125,
  },
  cardText1: {
    fontSize: 17,
    fontWeight: "semibold",
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },
  cardText2: {
    fontSize: 13,
    fontWeight: "semibold",
    marginLeft: 10,
    color: "white",
  },
  footer: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderBottomColor: "black",
  },
  footerCard: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderBottomColor: "black",
  },
  footerText: { color: "#32A078" },
  guideViewHeading: {
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 22,
  },
  guideView: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  guide1: {
    width: "80%",
  },
  guide1Text1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  horizontal: {
    borderWidth: 0.5,
    borderBottomColor: "#D4D4D6",
    marginTop: 20,
  },
  guide1Text2: {
    marginTop: 5,
  },
  guide2: {
    width: "20%",
  },
});
