import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Style from "./login-style";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

function Login({navigation}) {

  const[name, SetName]=useState("");
  console.log(name);
  return (
    <>

        {/* Final Wrapper */}
        <View
            style={Style.final___wrapper}
        >

          {/* Login Title */}
        <Text style={Style.title}>Login</Text>

        {/* Login Image */}
        <Image
          source={require("foody/src/login_icon.jpg")}
          style={Style.login_image_style}
        />


        {/* Input section wrapper */}
        <View style={Style.input_section}>


        
        {/* First Name Section Start */}
        <View style={Style.login_section_element}>
        <Ionicons
            style={{alignSelf:"flex-end"}}
            name="person-outline"
            size={25}
            color="black"
          />
            <TextInput
              placeholder="First Name"
              style={{ marginLeft: 10, flex: 1, paddingVertical: 0 }}
              keyboardType="default"
              value={name}
              onChangeText={(d)=>SetName(d)}
            />
          </View>
          {/* First Name Section End */}
          {/* Last Name Section Start */}
          <View style={Style.login_section_element}>
        <Ionicons
            style={{alignSelf:"flex-end"}}
            name="person-outline"
            size={25}
            color="black"
          />
            <TextInput
              placeholder="Last Name"
              style={{ marginLeft: 10, flex: 1, paddingVertical: 0 }}
              keyboardType="default"
            />
          </View>
          {/* Last Name Section End */}



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


          

        {/* Forgot password text */}
          <TouchableOpacity onPress={() => {}}>
              <Text style={{ textAlign: "center", marginBottom: 10 }}>
                Forgot Password?
              </Text>
          </TouchableOpacity>




        {/* Login Button */}
          <TouchableOpacity style={Style.login_button} onPress={() => {
            navigation.replace('Home', {name})
            }}>
              <Text
                style={Style.login___button___text}
              >
                Login
              </Text>
          </TouchableOpacity>



        {/* login witg text */}
          <Text style={Style.or___login___text}>
              Or, login with...
          </Text>



        {/* social icons wrapper */}
          <View
              style={Style.social___icons___wrapper}>
              <TouchableOpacity onPress={()=>{}}>
                <Icon2 name="google" size={30} color="blue"/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>{}}>
                <Icon2 name="facebook" size={30} color="blue"/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>{}}>
                <Icon2 name="twitter" size={30} color="blue"/>
              </TouchableOpacity>

              
              
              
          </View>

              <View style={Style.new___to___app}>
               <Text style={{textAlign:"center"}}>New to App? </Text>
               <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}> 
               <Text style={{color:"purple"}}>Register</Text>
               </TouchableOpacity>
              </View>

        </View>
      </View>


    </>
  );
}

export default Login;
