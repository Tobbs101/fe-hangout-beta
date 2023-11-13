import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
// import Login from './screens/auth/Login';
import { Login, Welcome, Register } from './screens/auth/Index';

const Stack = createStackNavigator();

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

//prettier-ignore
const App: React.FC<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default App;
