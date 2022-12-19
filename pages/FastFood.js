import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { fastfood } from "../src/data";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const FastFood = ({ route, navigation }) => {
  const [item, setItem] = useState([]);

  const handleItem = (data) => {
    const NewList = item.concat(data);
    console.log(item);
    setItem(NewList);
  };
  const Card = ({ name, desc, price, img, star }) => {
    return (
      <>
        {/* Particular card design start */}
        <View style={Style.container}>
          <Image style={Style.Image} source={{ uri: img }} />
          <Text style={Style.Title}>{name}</Text>
          <Text style={Style.Desc}>{desc}</Text>
          <Text style={Style.Star}>{star}</Text>
          <Text style={Style.Price}> ₹{price}</Text>
          <Ionicons
            style={Style.Staricon}
            name="star"
            size={15}
            color="green"
          />
          <Text style={Style.More}>Tap for more details</Text>
        </View>
        {/* Particular card design end */}
      </>
    );
  };
  return (
    <View style={{ backgroundColor: "#EBF0F5", marginBottom: 190 }}>
      <Text style={{ fontSize: 30, paddingTop: 50, marginLeft: 30 }}>
        Top Class FastFood Items
      </Text>
      <Text
        style={{
          color: "#464646",
          marginLeft: 30,
          letterSpacing: 1,
          marginRight: 10,
          marginTop: 20,
        }}
      >
        Taste our authentic flavour food items for Folks. Grab up your items
        from our stock right now!
      </Text>
      <ScrollView
        style={{
          backgroundColor: "#EBF0F5",
          position: "relative",
          marginTop: 50,
        }}
      >
        {fastfood.map((data, index) => {
          return (
            <>
              <View key={data.id}>
                {/* Single card component start */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Buy", {
                      otherparam: [
                        data.id,
                        data.name,
                        data.desc,
                        data.price,
                        data.img,
                        data.star
                      ],
                    });
                  }}
                >
                  <Card
                    name={data.name}
                    desc={data.desc}
                    price={data.price}
                    img={data.img}
                    star={data.star}
                  />
                  <View style={{ height: 10 }}></View>
                </TouchableOpacity>
                {/* Single card component end */}
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FastFood;

const Style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 25,
    borderRadius: 10,
    elevation: 5,
    paddingVertical: "17%",
    position: "relative",
  },
  Image: {
    height: 130,
    width: 130,
    borderRadius: 10,
    position: "absolute",
    top: 5,
    left: 5,
  },
  Title: {
    fontSize: 20,
    position: "absolute",
    top: 20,
    left: 150,
  },
  Desc: {
    fontSize: 15,
    color: "grey",
    position: "absolute",
    top: 50,
    left: 150,
  },
  Price: {
    fontSize: 15,
    color: "grey",
    position: "absolute",
    top: 100,
    left: 150,
  },
  Star: {
    position: "absolute",
    color: "green",
    top: 100,
    right: 50,
  },
  Staricon: {
    position: "absolute",
    color: "green",
    bottom: 22,
    right: 30,
  },
  More: {
    color: "orange",
    position: "absolute",
    bottom: 40,
    left: 150,
  },
});
