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
import DetailAksara from '../screens/Detail/DetailAksara';
import DetailSandangan from '../screens/Detail/DetailSandangan';
import DetailSwara from '../screens/Detail/DetailSwara';
import ApalanCepet from '../screens/bulilik/ApalanCepet'

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
        <Stack.Screen name='DetailSandangan' component={DetailSandangan} />
        <Stack.Screen name='DetailSwara' component={DetailSwara} />
        <Stack.Screen name='ApalanCepet' component={ ApalanCepet } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
