import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Posts from './screens/posts';
import Profile from './screens/profile';
import Login from './screens/login';
import BottomNav from './screens/bottomtab';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: true, headerTintColor: 'black'}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: true, headerStyle:{
          backgroundColor: 'black',}, headerTintColor:'white'}}/>
        <Stack.Screen name="Posts" component={Posts} options={{headerShown: true, headerStyle:{
          backgroundColor: 'black',}, headerTintColor:'white'}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: true}}/>
        <Stack.Screen name='BottomTab' component={BottomNav} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

