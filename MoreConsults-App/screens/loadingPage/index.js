import { SafeAreaView, Text,Image  } from 'react-native' 
import styles from './styles'

export default function LoadingPage() {
  
  return(
  <SafeAreaView style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../../assets/Logo-mais-consultas.png')}
    />
  </SafeAreaView>
  );
}
