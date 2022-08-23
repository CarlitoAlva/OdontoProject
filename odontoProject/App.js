import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitScreen from './src/screens/InitScreen';
import HomeScreen from './src/screens/HomeScreen';
import StartScreen from './src/screens/StartScreen';
import FirstScreen from './src/screens/screenNumbers/FirstScreen';
import PigmentationsScreen from './src/screens/screenNumbers/First/PigmentationsScreen';
import BadBreathScreen from './src/screens/screenNumbers/First/BadBreathScreen';
import LostTeethScreen from './src/screens/screenNumbers/First/LostTeethScreen';
import DentalImplantFailSreen from './src/screens/screenNumbers/First/DentalImplantFailSreen';
import SecondScreen from './src/screens/screenNumbers/SecondScreen';
import ThirdScreen from './src/screens/screenNumbers/ThirdScreen';
import FourthScreen from './src/screens/screenNumbers/FourthScreen';
import HelpLinesScreen from './src/screens/HelpLinesScreen';

function Home({ navigation }) {
  return (
    <HomeScreen 
              navigation={navigation}/>
  );
}
function Start({ navigation }) {
  return (
    <StartScreen
              navigation ={navigation}/>
  );
}
function First({ navigation }) {
  return (
    <FirstScreen
              navigation={navigation}/>
  );
}
function Pigmentations({ navigation }){
  return(
    <PigmentationsScreen
              navigation={navigation}/>
  );
}
function BadBreath({ navigation }){
  return(
    <BadBreathScreen
              navigation={navigation}/>
  );
}
function LostTeeth({ navigation }){
  return(
    <LostTeethScreen
              navigation={navigation}/>
  );
}
function FailureTeeth({ navigation }){
  return(
    <DentalImplantFailSreen
              navigation={navigation}/>
  );
}
function Second({ navigation }) {
  return (
    <SecondScreen
              navigation={navigation}/>
  );
}
function Third({ navigation }) {
  return (
    <ThirdScreen
              navigation={navigation}/>
  );
}
function Fourth({ navigation }) {
  return (
    <FourthScreen
              navigation={navigation}/>
  );
}
function HelpLines({ navigation }){
  return(
    <HelpLinesScreen
              navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="1" component={First} options={{ headerShown: false }} />
        <Stack.Screen name="Pigmentations" component={Pigmentations} options={{ headerShown: false }} />
        <Stack.Screen name="BadBreath" component={BadBreath} options={{ headerShown: false }} />
        <Stack.Screen name="LostTeeth" component={LostTeeth} options={{ headerShown: false }} />
        <Stack.Screen name="FailureTeeth" component={FailureTeeth} options={{ headerShown: false }} />
        <Stack.Screen name="2" component={Second} options={{ headerShown: false }} />
        <Stack.Screen name="3" component={Third} options={{ headerShown: false }} />
        <Stack.Screen name="4" component={Fourth} options={{ headerShown: false }} />
        <Stack.Screen name="HelpLines" component={HelpLines} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;