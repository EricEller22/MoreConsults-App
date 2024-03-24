import { SafeAreaView, Text, Image, View, TouchableOpacity  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

export default function HomePage() {
  
  return(
  <SafeAreaView style={styles.container}>

    <View style={styles.containerBlue}>

      <Image
        style={styles.logo}
        source={require('../../assets/Logo-mais-consultas2.png')}
      />

      <View style={styles.containerLegend}>
        <TouchableOpacity><Text style={styles.profileLegend}>Olá "___" ! ></Text></TouchableOpacity>
      </View>

    </View>
    

    
    <View style={styles.containerWhite}>

      <TouchableOpacity style={styles.agendButton}> 
        <Text style={styles.textAgendButton}>Agendar um novo atendimento</Text>
      </TouchableOpacity>

      <View style={styles.moreButtons}>
      
        <View style={styles.lineButton}>
          <TouchableOpacity style={styles.moreButton}> 
            <Text style={styles.textmoreButton}>Valores</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreButton}> 
            <Text style={styles.textmoreButton}>Histórico de atendimentos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lineButton}>
          <TouchableOpacity style={styles.moreButton}> 
            <Text style={styles.textmoreButton}>Agenda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreButton}> 
            <Text style={styles.textmoreButton}>Mensagens</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  </SafeAreaView>
  );
}
