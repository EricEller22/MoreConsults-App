import { SafeAreaView, Text, Image, View, TouchableOpacity  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {useAppContext} from '../../src/contexts/AppContext'

export default function ConfigPage() {
  const navigation = useNavigation();

  return(
  <SafeAreaView style={styles.container}>
 
    <View style={styles.containerBlue}>
      <Icon name="cog" size={20} color="#FFF" style={styles.icon}/>
      <Text style={styles.title}>Configurações</Text>
    </View>
    

    <View style={styles.containerWhite}>  
   

      

      
    </View>


  </SafeAreaView>
  );
}
