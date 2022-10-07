import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/src/Pages/Home";
import { MainStackNavigation } from "./app/Types";
import ExpenseList from "./app/src/Pages/ExpenseList";

const Stack = createNativeStackNavigator<MainStackNavigation>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "LostMoney",
            headerStyle: { backgroundColor: "#166065" },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Expense_List"
          component={ExpenseList}
          options={{
            title: "Expense List",
            headerStyle: { backgroundColor: "#166065" },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
