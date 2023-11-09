import { StatusBar } from 'expo-status-bar';


//screens
import Login from './screens/auth/Login';

export default function App() {
  return (
    <Login source={require('./assets/login.jpg')}  />
  );
}

