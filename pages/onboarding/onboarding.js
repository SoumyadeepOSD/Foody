import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import { Image, Text, View } from "react-native";
import Style from "./OnBoarding-design";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { LinearTextGradient } from "react-native-text-gradient";
import { SafeAreaView } from "react-navigation";



function OnBoarding({navigation}) {
  return (
    <>
      <Onboarding
      nextLabel={<Text>Next</Text>}
      skipLabel={<Text>Prev</Text>}
      onDone={()=>{navigation.replace('Login')}}
      pages={[
          {
            backgroundColor: "#FA9632",
            image: <Image source={require('foody/src/asset1.png')} style={Style.ImageStyle}/>,
            title: <Text style={Style.TitleStyle}>
              Welcome to <Text style={{color:"green"}}>Foody!</Text>
            </Text>,
            subtitle: <Text style={Style.SubTitleStyle}>Hungry? just order on foody</Text>,
          },
          {
            backgroundColor: "#FA9632",
            image: <Image source={require('foody/src/delivery.png')} style={Style.ImageStyle2}/>,
            title: <Text style={[Style.TitleStyle, {color:"white"}]}>What are you waiting for?</Text>,
            subtitle: <Text style={[Style.SubTitleStyle__2, {color:"grey ", fontWeight:"bold "}]}>Don't overthink. just order it without any hasitation</Text>
          },
          {
            backgroundColor: "#FA9632",
            image: <Image source={require('foody/src/output-onlinepngtools.png')} style={Style.ImageStyle2}/>,
            title: <Text style={Style.TitleStyle}>Try it now!</Text>,
            subtitle: <Text style={[Style.SubTitleStyle__2, {marginLeft:'10%'}]}>Check it our latest offer in this App</Text>
          },
        ]}
      />
    </>
  );
}

export default OnBoarding;
