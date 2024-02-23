import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Posts from "./posts";
import Profile from "./profile";
import Search from "./search";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: () => (
            <MaterialIcons name="home" color={"black"} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: () => (
            <MaterialIcons name="search" color={"black"} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: () => (
            <MaterialIcons name="person" color={"black"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
