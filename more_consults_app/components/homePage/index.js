import { SafeAreaView, Text, Image, View, TouchableOpacity  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {useAppContext} from '../../src/contexts/AppContext'

export default function HomePage() {
  const navigation = useNavigation();
  
  const {currentUser} = useAppContext()

  return(
  <SafeAreaView style={styles.container}>
 
    <View style={styles.containerBlue}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/Logo-mais-consultas2.png')}
          style={styles.logo}
        />
      </View>  

      <View style={styles.containerLegend}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.legend}>
          <View style={styles.profileIcon}>
            <Icon name="user" size={40} color="#43B4BB" />
          </View>
          <Text style={styles.profileLegend}>Olá {currentUser} ! </Text>
        </TouchableOpacity>
      </View>
    </View>
    

    
    <View style={styles.containerWhite}>

      <TouchableOpacity style={styles.agendButton} onPress={() => navigation.navigate("Services")}> 
        <Text style={styles.textAgendButton}>Agendar um novo atendimento</Text>
      </TouchableOpacity>

      <View style={styles.moreButtons}>
      
        <View style={styles.lineButton}>

          <TouchableOpacity style={styles.moreButton}> 
            <View style={styles.iconContainer}>
              <Icon name="dollar" size={50} color="#FFFFFF" />
            </View>
            <Text style={styles.textmoreButton}>Valores</Text>   
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.moreButton}>
          <View style={styles.iconContainer}>
            <Icon name="clock-o" size={50} color="#FFFFFF" />
          </View> 
            <Text style={styles.textmoreButton}>Histórico de agendamentos</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.lineButton}>

          <TouchableOpacity style={styles.moreButton}> 
          <View style={styles.iconContainer}>
            <Icon name="calendar" size={50} color="#FFFFFF" />
          </View>
            <Text style={styles.textmoreButton}>Agenda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moreButton}> 
          <View style={styles.iconContainer}>
            <Icon name="envelope" size={50} color="#FFFFFF" />
          </View>
            <Text style={styles.textmoreButton}>Mensagens</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  </SafeAreaView>
  );
}
