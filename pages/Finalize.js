import { View, Text } from 'react-native'
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";


const Finalize = () => {
  return (
    <View style={{alignItems:"center", marginTop:'70%'}}>
      <Ionicons name="checkmark-done-circle"
            size={70}
            color="green"/>
    <Text style={{fontSize:30, paddingVertical:20, textAlign:"center"}}>Your Order has been placed!</Text>
    <Text style={{fontSize:20, paddingVertical:20}}>Thankyou, Visit Again</Text>
    <Text style={{fontSize:20, marginTop:200, textAlign:"center", color:"red"}}>Made By Soumyadeep Das Bhowmick(Software Engineer)</Text>
    </View>
  )
}

export default Finalize;