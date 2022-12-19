import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { StackActions } from "@react-navigation/native";

const Buy = ({ route, navigation }) => {

  const[tap, SetTap]=useState(0);
  const[count, SetCount]=useState(0);
  const [cart, SetCart] = useState([]);
  const addToCart = (el) => SetCart([...cart, el]);

  const HandleTap=()=>
  {
    if(tap===0)
    {
      SetTap(1);
    }
    else if(tap===1)
    {
      SetTap(0);
    }
    console.log(tap);
  }

  const Counter=(O)=>
  {
    if(O=='A')
    {
      SetCount(count+1);
    }
    else if(O=='S')
    {
      SetCount(count-1);
    }
  }

  const { otherparam } = route.params;
  return (
    <View style={Style.container}>
      <Image style={Style.image___style} source={{ uri: otherparam[4] }} />
      <View style={Style.rating}>
        <Ionicons
          style={Style.star___style}
          name="star-outline"
          size={20}
          color="white"
        />
        <Text style={{ color: "white", fontSize: 20 }}>{otherparam[5]}</Text>
      </View>
      <Text style={Style.title___style}>{otherparam[1]}</Text>
      <Text style={Style.price___style}>₹ {otherparam[3]}</Text>

      <TouchableOpacity style={Style.cart_style}>
        <Ionicons name="cart" size={40} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={
          !tap?{backgroundColor: "orange",
          marginLeft: "50%",
          paddingVertical: "3%",
          borderRadius: 10,
          alignItems: "center",
          marginTop: 10,
          marginRight: 10,}:{backgroundColor: "red",
          marginLeft: "50%",
          paddingVertical: "3%",
          borderRadius: 10,
          alignItems: "center",
          marginTop: 10,
          marginRight: 10,}
        }
        onPress={() => {HandleTap(), addToCart(otherparam[2]), console.log(cart);
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>
          {!tap?"+ Add to Cart":"- Remove"}
        </Text>
      </TouchableOpacity>
      < View 
        style={(tap==1)?{
                position: "absolute",
                top: "43%",
                left: "10%",
                display: "flex",
                flexDirection: "row",
                backgroundColor: "lightgrey",
                borderColor: "cyan",
                borderWidth: 1,
              }:{display:"none"}}
      >
        <TouchableOpacity
          onPress={() => {
            Counter('S')
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              backgroundColor: "green",
              paddingHorizontal: 10,
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 20, paddingHorizontal: 10 }}>
            {count}
        </Text>
        <TouchableOpacity
          onPress={() => {
            Counter('A')
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              backgroundColor: "green",
              paddingHorizontal: 10,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{color:"#666666", fontSize:30, paddingVertical:10, marginBottom:20, marginLeft:10}}>Details</Text>
      <Text style={{textAlign:"left", paddingHorizontal:10, paddingVertical:10, fontSize:15,color:"grey"}}>{otherparam[1]} is one of the best nonveg food in this world, We can eat it with any kind of items and especially with fried rice or with paratha also</Text>
      <Text style={{color:"black", paddingHorizontal:10, fontSize:20}}>Order now to get our latest food item at your doorstep</Text>
      <View style={{backgroundColor:'lightgrey', width:'90%', height:2, alignSelf:"center", marginVertical:10}}></View>
      <View style={{display:"flex", flexDirection:"column"}}>
        <TouchableOpacity onPress={()=>{
          navigation.dispatch(
            StackActions.replace('Final',{otherparams:[otherparam[1], otherparam[2], otherparam[3], otherparam[4], count]}))}}>
        <Text style={Style.buy___now}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buy;

const Style = StyleSheet.create({
  image___style: {
    height: "40%",
    width: "100%",
  },
  container: {
    position: "relative",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  title___style: {
   fontSize:30,
   position: "absolute",
   top:'53%',
   marginLeft:10,
  },
  desc___style: {
    position: "absolute",
    bottom:0
  },
  price___style: {
    position: "absolute",
    right: 0,
    color: "white",
    fontSize: 20,
    backgroundColor: "green",
    paddingHorizontal: 10,
    borderRadius: 15,
    top: "32%",
    right: "5%",
    elevation: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  cart_style: {
    position: "absolute",
    right: "10%",
    top: "5%",
    backgroundColor:"orange",
    borderRadius:50,
    padding:5,
    borderColor:"cyan",
    borderWidth:2,
    elevation:5
  },
  rating: {
    position: "absolute",
    top: "32%",
    left: "10%",
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "green",
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 5,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  add_to_cart: {
    
  },
  buy___now:{
    backgroundColor:"green",
    fontSize:20,
    textAlign:"center",
    marginHorizontal:'30%',
    paddingVertical:10,
    borderRadius:30,
    elevation:10,
    marginTop:50
  }
});
