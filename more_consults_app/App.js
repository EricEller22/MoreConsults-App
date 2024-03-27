import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/homePage/index' 
import LoadingPage from './components/loadingPage/index'
import LoginPage from './components/loginPage/index'
import RegisterPage from './components/registerPage/index'
import ServicePage from  './components/servicePage/index'

export default function App() {
  return (
    <View style={styles.container}>
      <ServicePage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
