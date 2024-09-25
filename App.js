import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/home.js';
import CheckOutScreen from './screens/checkOut.js';
import ChildMindScreen from './screens/childMind.js';
import CookingScreen from './screens/cooking.js';
import FirstAidScreen from './screens/firstAid.js';
import GardenMainScreen from './screens/gardenMain.js';
import LandscapingScreen from './screens/landScaping.js';
import LifeSkillsScreen from './screens/lifeSkills.js';
import MonthSumScreen from './screens/monthSum.js';
import SelectScreen from './screens/select.js';
import SewingScreen from './screens/sewing.js';
import SignInScreen from './screens/signIn.js';
import WeekSumScreen from './screens/weekSum.js';

const Stack = createNativeStackNavigator();    //The IIE, 2024

function App() {    //The IIE, 2024
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CheckOut" component={CheckOutScreen} />
        <Stack.Screen name="ChildMind" component={ChildMindScreen} />
        <Stack.Screen name="Cooking" component={CookingScreen} />
        <Stack.Screen name="FirstAid" component={FirstAidScreen} />
        <Stack.Screen name="GardenMain" component={GardenMainScreen} />
        <Stack.Screen name="Landscaping" component={LandscapingScreen} />
        <Stack.Screen name="LifeSkills" component={LifeSkillsScreen} />
        <Stack.Screen name="MonthSum" component={MonthSumScreen} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Sewing" component={SewingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="WeekSum" component={WeekSumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
