import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../screens/Welcome";
import { UserIdentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";
import { PlantSelect } from "../screens/PlantSelect";
import { PlantSave } from "../screens/PlantSave";
import { Success } from "../screens/Success";
import { useAuth } from "../hooks/auth";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  const { user } = useAuth();

  if (!user)
    return (
      <Navigator>
        <Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Screen
          name="UserIdentification"
          component={UserIdentification}
          options={{ headerShown: false }}
        />
        <Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: false }}
        />
      </Navigator>
    );

  return (
    <Navigator>
      <Screen
        name="PlantSelect"
        component={PlantSelect}
        options={{ headerShown: false }}
      />
      <Screen
        name="PlantSave"
        component={PlantSave}
        options={{ headerShown: false }}
      />
      <Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
