import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DishesProvider } from './screens/dishContext.js';

import DesertScreen from './screens/deserts';
import MainScreen from './screens/mains';
import StarterScreen from './screens/starters';
import HomeScreen from './screens/home';
import AddScreen from './screens/add';
import EditScreen from './screens/edit';

const Stack = createNativeStackNavigator();    //The IIE, 2024

function App() {    //The IIE, 2024
  return (
    <DishesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Deserts" component={DesertScreen} />
          <Stack.Screen name="Mains" component={MainScreen} />
          <Stack.Screen name="Starters" component={StarterScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DishesProvider>
  );
}

export default App;
