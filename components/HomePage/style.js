import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: { height: "100%", paddingTop: 40, marginRight: 15, marginLeft: 15 },
  navbarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
  },
  main: {
    height: "100%",
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
  newNASDAQText: {
    fontSize: 27,
    color: "white",
    fontWeight: "bold",
    lineHeight: 44,
  },
  footer: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerCard: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

export default styles;
