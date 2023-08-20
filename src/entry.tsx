import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeView';
import SimpleScreen from './SimpleView';
import AdvanceScreen from './AdvanceView';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Simple' component={SimpleScreen} />
        <Stack.Screen name='Advance' component={AdvanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
