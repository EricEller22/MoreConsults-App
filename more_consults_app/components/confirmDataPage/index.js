import { SafeAreaView, Text, Image, View, TouchableOpacity  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

export default function ConfirmDataPage() {
  
  return(
  <SafeAreaView style={styles.container}>

    <View style={styles.containerBlue}>
      
      <View style={styles.header}>
      
        <View>
          <TouchableOpacity><Text style={styles.profileLegend}>Olá "___" ! ></Text></TouchableOpacity>
        </View>

        <Image
          style={styles.logo}
          source={require('../../assets/Logo-mais-consultas3.png')}
        />
      </View>
    </View>
    

    
    <View style={styles.containerWhite}>

      <View style={styles.backButtonContainer}>
        <Text style={styles.backButton}><TouchableOpacity>Data/Hora</TouchableOpacity></Text>
      </View>

      <View style={styles.containerLegendTwo}>
        <Text style={styles.legend}>Confira abaixo se as informações estão corretas:</Text>
      </View>

      <View style={styles.containerData}>
        <View style={styles.dataOne}>
          <Text style={styles.textOne}>Instituição:</Text>
          <Text style={styles.textOne}>Serviço:</Text>
          <Text style={styles.textOne}>Data e hora:</Text>
          <Text style={styles.textOne}>Valor:</Text>
        </View>
        <View style={styles.dataTwo}>
          <Text style={styles.textTwo}>Instituição:</Text>
          <Text style={styles.textTwo}>Serviço:</Text>
          <Text style={styles.textTwo}>Data e hora:</Text>
          <Text style={styles.textTwo}>Valor:</Text>
        </View>
      </View>

     <View style={styles.buttons}>
        <View style={styles.buttonOne}>
          <TouchableOpacity style={styles.voltarButton}>
            <Text style={styles.butonText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonTwo}>
          <TouchableOpacity style={styles.confirmarButton}>
            <Text style={styles.butonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  </SafeAreaView>
  );
}
