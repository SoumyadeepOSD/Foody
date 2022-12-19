import { View, Text } from "react-native";
import React from "react";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { StackActions } from "@react-navigation/native";

const Payment = ({navigation}) => {

    setTimeout(()=>{
        navigation.dispatch(
            StackActions.replace('End')
        )
      }, 10000);
  return (
    <View style={{alignItems:"center", marginTop:'70%'}}>
      <AnimatedProgressWheel
        size={120}
        width={15}
        progress={100}
        animateFromValue={0}
        duration={10000}
        color={"black"}
        fullColor={"cyan"}
      />

      <Text
        style={{
          color: "green",
          marginVertical: 10,
          textAlign: "center",
          fontSize: 20,
        }}
      >
        Booking Your order...
      </Text>
      <Text style={{textAlign:"center", fontSize:20}}>Hold your cup of coffee & wait</Text>
    </View>
  );
};

export default Payment;
