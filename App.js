import { View, Text } from 'react-native';
import React from 'react';
import Welcome from './pages/welcome/welcome';
import Register from './pages/Register/Register';
import Login from './pages/login/login';
import OnBoarding from './pages/onboarding/onboarding';
import Home from './pages/home/home';
import VEGITABLE from './pages/Veg';
import NONVEGITABLE from './pages/NonVeg';
import FastFood from './pages/FastFood';
import Buy from './pages/Buy';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Final from './pages/Final';
import Payment from './pages/Payment';
import Finalize from './pages/Finalize';
import Cart from './pages/Cart';

const App = ()=>{

  const Stack = createNativeStackNavigator();
  return(<>
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name='OnBoarding' component={OnBoarding} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Vegitable' component={VEGITABLE} options={{headerShown:false}}/>
      <Stack.Screen name='NonVeg' component={NONVEGITABLE} options={{headerShown:false}}/>
      <Stack.Screen name='FastFood' component={FastFood} options={{headerShown:false}}/>
      <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
      <Stack.Screen name='Buy' component={Buy} options={{headerShown:false}}/>
      <Stack.Screen name='Final' component={Final} options={{headerShown:false}}/>
      <Stack.Screen name='Payment' component={Payment} options={{headerShown:false}}/>
      <Stack.Screen name='End' component={Finalize} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>);
}

export default App;