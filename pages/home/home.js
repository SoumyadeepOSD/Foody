import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


function Home({ route, navigation}) {
  
  const Card = ({ text, iName }) => {
    return (
      // Total card container
      <View style={Style.card_container}>
        {/* Single card design */}
        <View style={Style.single_card}>
          <Ionicons
            style={Style.card_icon}
            name={iName}
            size={30}
            color="red"
          />
        </View>
        {/* Single card design end*/}
        <Text style={Style.card_text}>{text}</Text>
      </View>
      // Total card container end
    );
  };

  return (
    <ScrollView>
      <View style={{ marginTop: 70, marginHorizontal: 30 }}>
        <View style={Style.whole_page_wrapper}>
          <Text style={Style.address_line}>C.A.P Camp, Police Housing</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("foody/src/burger.png")}
          />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 40 }}>Hello, {route.params.name}</Text>
        <Text style={{ color: "grey", fontSize: 15 }}>
          what do you want to eat?
        </Text>

        {/* catagory title */}
        <Text style={Style.catagory_text}>Catagories</Text>
        {/* catagory title end */}

        {/* Catagory View */}
        <View style={Style.catagory_view}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Vegitable");
            }}
          >
            <Card text={"Veg"} iName={"leaf-outline"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NonVeg");
            }}
          >
            <Card text={"NonVeg"} iName={"pizza-outline"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FastFood");
            }}
          >
            <Card text={"FastFood"} iName={"fast-food-outline"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Card text={"More"} iName={"menu"} />
          </TouchableOpacity>
        </View>
        {/* Catagory View end */}

        {/* Promo Section */}
        <View style={Style.portion_view}>
          <Text style={Style.portion_title}>Today's promo</Text>

        </View>
        {/* Promo screen end */}
        
      </View>
    </ScrollView>
  );
}



const Style = StyleSheet.create({
  see_all: {
    color: "orange",
    fontSize: 15,
  },

  portion_title: {
    color: "blue",
    fontSize: 25,
  },

  portion_view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  catagory_view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  catagory_text: {
    color: "blue",
    fontSize: 25,
    marginVertical: 10,
  },

  card_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  single_card: {
    backgroundColor: "white",
    borderRadius: 17,
    height: 70,
    width: 70,
    elevation: 5,
  },

  card_icon: {
    alignSelf: "center",
    marginVertical: 20,
  },

  card_text: {
    marginVertical: 5,
    color: "grey",
  },

  whole_page_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  address_line: {
    backgroundColor: "orange",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

export default Home;
