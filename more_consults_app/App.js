import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/homePage/index' 
import LoadingPage from './components/loadingPage/index'
import LoginPage from './components/loginPage/index'
import RegisterPage from './components/registerPage/index'
import ServicePage from  './components/servicePage/index'
import IntitutePage from './components/institutePage/index'
import CalendaryPage from './components/calendaryPage/index';
import ConfirmDatePage from './components/confirmDataPage/index'
import ConcluedPage from './components/concludedPage/index'

const Stack = createStackNavigator();

export default function App() {
  return (
    <HomePage/>
  );
} 

