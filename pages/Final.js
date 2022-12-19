import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";

const Final = ({ route, navigation }) => {
  const { otherparams } = route.params;
  return (
    <>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <Text style={{ fontSize: 30, textAlign: "center", marginTop: 60 }}>
          Final ordering
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            marginVertical: "20%",
            paddingVertical: 50,
            justifyContent: "space-around",
            marginHorizontal: 30,
            borderRadius: 20,
            elevation: 10,
          }}
        >
          <Image
            style={{ height: 90, width: 90, borderRadius: 10 }}
            source={{ uri: otherparams[3] }}
          />
          <View>
            <Text style={{ fontSize: 20 }}>{otherparams[0]}</Text>
            <Text>{otherparams[1]}</Text>
            <Text>Amount: {otherparams[4]}</Text>
          </View>
          <Text style={{ fontSize: 20 }}>₹{otherparams[2]}</Text>
        </View>
        <Text style={{textAlign:"center", fontSize:30, marginBottom:20}}>Total Cost  ₹{otherparams[2]*otherparams[4]}</Text>
        <TouchableOpacity onPress={()=>{
            navigation.dispatch(
                StackActions.replace('Payment')
            )
            }}>
          <Text
            style={{
              backgroundColor: "green",
              alignSelf: "center",
              paddingHorizontal: 70,
              paddingVertical: 10,
              borderRadius: 20,
              fontSize: 20,
              color: "white",
              elevation:10
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Final;
