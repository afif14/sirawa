import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Splash from '../screens/Splash';

import Menu from '../screens/Menu/Menu';
import Story from '../screens/Menu/Story';
import Information from '../screens/Menu/Information';
import Guide from '../screens/Menu/Guide';

import Learn from '../screens/Learn/Learn';
import Sandangan from '../screens/Learn/Sandangan';
import AksaraSwara from '../screens/Learn/AksaraSwara';
import AksaraLanPasangan from '../screens/Learn/AksaraLanPasangan';
import Taling from '../screens/Sandangan/Taling'
import DetailAksara from '../screens/AkasaraLanPasangan';

export default function router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='Story' component={Story} />
        <Stack.Screen name='Learn' component={Learn} />
        <Stack.Screen name='Information' component={Information} />
        <Stack.Screen name='Guide' component={Guide} />
        <Stack.Screen name='Sandangan' component={Sandangan} />
        <Stack.Screen name='AksaraSwara' component={AksaraSwara} />
        <Stack.Screen name='AksaraLanPasangan' component={AksaraLanPasangan} />
        <Stack.Screen name='DetailAksara' component={DetailAksara} />
        <Stack.Screen name='Taling' component={Taling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
