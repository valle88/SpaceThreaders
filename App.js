import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import CreditScreen from './screens/CreditScreen';
import ShipsScreen from './screens/ShipsScreen';
import LoginScreen from './screens/LoginScreen';
import ConectScreen from './screens/ConectScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

export default function App() {
  const [signIn, setSignIn] = useState({});

  return (
    Object.entries(signIn).length === 0
      ?
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login'>
          <Drawer.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
          <Drawer.Screen name='Conect' options={{headerShown: false}}>
            {() => <ConectScreen setSignIn={setSignIn} />}
          </Drawer.Screen>
          <Drawer.Screen name='SignUp' component={RegisterScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
      :
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Credit' component={CreditScreen} />
          <Drawer.Screen name='Ships' component={ShipsScreen} />
          <Drawer.Screen name='Login' component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}