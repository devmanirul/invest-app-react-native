import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import image from "../../assets/images/Card1.png";
import image1 from "../../assets/images/Card2.png";
import image2 from "../../assets/images/Card3.png";
import styles from "./style";
import Footer from "../shared/Footer";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.body}>
      {/* navbar */}
      <View style={styles.navbarContainer}>
        <TouchableOpacity>
          <Image source={require("../../assets/images/menu.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Image source={require("../../assets/images/bell.png")} />
        </TouchableOpacity>
      </View>
      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
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
        {/* best plan */}
        <View style={styles.bestPlan}>
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
        {/* invesTment guide */}
        <View>
          <Text style={styles.guideHeading}>Investment Guide</Text>
          {/* invesmesnt card1 */}
          <View style={styles.guideView}>
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
          <View style={styles.horizontal}></View>
          {/* invesmesnt card2 */}
          <View style={styles.guideView}>
            <View style={styles.guide1}>
              <Text style={styles.guide1Text1}>How much can you start</Text>
              <Text style={styles.guide1Text2}>
                What do you like to see? It’s a very different market from 2018.
                The way...
              </Text>
            </View>
            <View style={styles.guide2}>
              <View style={styles.main1}>
                <Image source={require("../../assets/images/guide2.png")} />
              </View>
            </View>
          </View>
        </View>
        {/* new NASDAQ */}
        <View>
          <Text style={styles.newNASDAQText}>Welcome to New NASDAQ</Text>
        </View>
      </ScrollView>
      {/* footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

export default Homepage;
