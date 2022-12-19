import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Style from "./welcome-style";


function Welcome({navigation}) {
  setTimeout(()=>{
    navigation.replace("OnBoarding")
  }, 3000);
  return (
    <>
    <LinearGradient colors={["orange", "#FFC83C", "#FFEC60"]}>
      <SafeAreaView>
      <View style={Style.welcome_style}>
        <Image
          source={require("foody/src/burger.png")}
          style={Style.welcome_image_style}
        />
        <Text style={Style.app_name_style}>F o o d y</Text>
        <Text style={Style.version___style}>V 1.0.0</Text>
      </View>
      </SafeAreaView>
      </LinearGradient>
    </>
  );
}

export default Welcome;
