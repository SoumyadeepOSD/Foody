import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Style from "./Register_style";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";

function Register({ navigation }) {
  return (
    <>
      {/* Final Wrapper */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <View
          style={{
            height: "1%",
            width: "50%",
            backgroundColor: "lightblue",
            position: "absolute",
            left: 100,
            bottom: "55%",
            borderRadius: 100,
          }}
        ></View>

        {/* Login Title */}
        <Text style={Style.title}>Register</Text>

        {/* Login Image */}
        <Image
          source={require("foody/src/login_icon.jpg")}
          style={Style.login_image_style}
        />

        {/* Input section wrapper */}
        <View style={Style.input_section}>
          {/* Email Section */}
          <View style={Style.login_section_element}>
            <Icon1 name="mail" size={30} color="black" />
            <TextInput
              placeholder="Email ID"
              style={{ marginLeft: 10, flex: 1, paddingVertical: 0 }}
              keyboardType="email-address"
            />
          </View>

          {/* Password Section */}
          <View style={Style.login_section_element}>
            <Icon1 name="lock" size={30} color="black" />
            <TextInput
              placeholder="Password"
              style={{ marginLeft: 10, flex: 1, paddingVertical: 0 }}
              secureTextEntry={true}
            />
          </View>

          <View style={Style.login_section_element}>
            <Icon1 name="phone" size={30} color="black" />
            <TextInput
              placeholder="Phone Number"
              style={{ marginLeft: 10, flex: 1, paddingVertical: 0 }}
              keyboardType="numeric"
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity style={Style.register___button} onPress={() => {}}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          {/* login witg text */}
          <Text
            style={{ color: "black", textAlign: "center", marginVertical: 5 }}
          >
            Or, register with...
          </Text>

          {/* social icons wrapper */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <Icon2 name="google" size={30} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Icon2 name="facebook" size={30} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Icon2 name="twitter" size={30} color="blue" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ textAlign: "center" }}>Already in App? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "purple" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Register;
