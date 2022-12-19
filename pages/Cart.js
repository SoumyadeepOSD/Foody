import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View>
     {/* Cart Title start*/}
     <Text style={Style.Cart___title}>Cart</Text>
    {/* Cart Title end*/}
    </View>
  )
}

export default Cart;

const Style = StyleSheet.create({
    Cart___title:{
        fontSize:30,
        textAlign:"center",
        marginTop:40,
        marginBottom:20
    }
});