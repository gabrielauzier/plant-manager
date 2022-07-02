import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlantSelect } from "../screens/PlantSelect";

import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { MyPlants } from "../screens/MyPlants";
import { RFValue } from "react-native-responsive-fontsize";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Minhas plantinhas"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.green,
        tabBarInactiveTintColor: theme.colors.body_light,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: RFValue(65),
          width: "100%",
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: RFValue(15),
        },
        tabBarItemStyle: {
          justifyContent: "center",
        },
      }}
    >
      <Screen
        name="Nova planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Minhas plantinhas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
