import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  login_image_style: {
    height: "25%",
    width: "45%",
    transform: [{ rotate: "-10deg" }],
    alignSelf: "center",
    marginTop: 5,
    marginBottom: "20%",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    // fontFamily:"MartianMono",
    textAlign: "left",
    paddingLeft: 20,
    fontSize: 40,
    marginTop: "10%",
  },
  login_section_element: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  input_section: {
    marginHorizontal: 32,
    marginVertical: 0,
  },
  login_button: {
    backgroundColor: "orange",
    paddingHorizontal: 0,
    width: "100%",
    padding: 10,
    borderRadius: 30,
    alignSelf: "center",
    marginVertical: 20,
    elevation:5
  },
  login___button___text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  or___login___text: {
    color: "black",
    textAlign: "center",
    marginVertical: 5,
  },
  social___icons___wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  new___to___app: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom:30
  },

  final___wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
});

export default Style;
