import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Checklist from "../views/Checklist";
import Pomodoro from "../views/Pomodoro";
import Statistics from "../views/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export default ({ children }) => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Checklist"
        screenOptions={{ headerBackVisible: false }}
      >
        <Screen name="Checklist" component={Checklist} />
        <Screen name="Pomodoro" component={Pomodoro} />
        <Screen name="Statistics" component={Statistics} />
      </Navigator>
      {children}
    </NavigationContainer>
  );
};
