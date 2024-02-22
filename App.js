import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/Module/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/Module/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/Module/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/Module/ModuleModifyScreen";
import UserListScreen from "./src/components/screens/User/UserListScreen";
import UserAddScreen from "./src/components/screens/User/UserAddScreen";
import UserViewScreen from "./src/components/screens/User/UserViewScreen";
import UserModifyScreen from "./src/components/screens/User/UserModifyScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const ModuleStackNavigation = createNativeStackNavigator();
const UserStackNavigation = createNativeStackNavigator();

const ModuleStack = () => {
  return (
    <ModuleStackNavigation.Navigator
      initialRouteName="ModuleListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      {/* Module Screens */}
      <ModuleStackNavigation.Screen
        name="ModuleListScreen"
        component={ModuleListScreen}
        options={{ title: "List Modules" }}
      />
      <ModuleStackNavigation.Screen
        name="ModuleAddScreen"
        component={ModuleAddScreen}
        options={{ title: "Add Module" }}
      />
      <ModuleStackNavigation.Screen
        name="ModuleViewScreen"
        component={ModuleViewScreen}
        options={{ title: "View Module" }}
      />
      <ModuleStackNavigation.Screen
        name="ModuleModifyScreen"
        component={ModuleModifyScreen}
        options={{ title: "Modify Module" }}
      />
    </ModuleStackNavigation.Navigator>
  );
};

const UserStack = () => {
  return (
    <UserStackNavigation.Navigator
      initialRouteName="UserListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      {/* User Screens */}
      <UserStackNavigation.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{ title: "List Users" }}
      />
      <UserStackNavigation.Screen
        name="UserAddScreen"
        component={UserAddScreen}
        options={{ title: "Add User" }}
      />
      <UserStackNavigation.Screen
        name="UserViewScreen"
        component={UserViewScreen}
        options={{ title: "View User" }}
      />
      <UserStackNavigation.Screen
        name="UserModifyScreen"
        component={UserModifyScreen}
        options={{ title: "Modify User" }}
      />
    </UserStackNavigation.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Modules">
        <Drawer.Screen
          name="Modules Crudler"
          component={ModuleStack}
          options={{ drawerLabel: "Modules Crudler" }}
        />
        <Drawer.Screen
          name="Users Crudler "
          component={UserStack}
          options={{ drawerLabel: "Users Crudler" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
