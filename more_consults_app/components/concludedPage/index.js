import { SafeAreaView, Text, Image, View, TouchableOpacity, CheckBox  } from 'react-native' 
import {useState} from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

export default function ConfirmDataPage() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
      setIsChecked(!isChecked);
    };
  
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

      <View style={styles.containerLegendTwo}>
        <Text style={styles.title}>Agendamento concluido</Text>
        <Text style={styles.legend}>Confira a baixo todos os dados sobre o agendamento:</Text>
      </View>

      <View style={styles.containerData}>
        <View style={styles.dataOne}>
          <Text style={styles.textOne}>Instituição:</Text>
          <Text style={styles.textOne}>Serviço:</Text>
          <Text style={styles.textOne}>Data e hora:</Text>
          <Text style={styles.textOne}>Doutor(a):</Text>
          <Text style={styles.textOne}>Endereço:</Text>
          <Text style={styles.textOne}>Valor:</Text>
        </View>
        <View style={styles.dataTwo}>
          <Text style={styles.textTwo}>Instituição:</Text>
          <Text style={styles.textTwo}>Serviço:</Text>
          <Text style={styles.textTwo}>Data e hora:</Text>
          <Text style={styles.textTwo}>Doutor(a):</Text>
          <Text style={styles.textTwo}>Endereço:</Text>
          <Text style={styles.textTwo}>Valor:</Text>
        </View>
      </View>

      <View style={styles.observation}>
        <Text style={styles.observationText}>Prazo máximo para cancelamento de até 3 dias úteis antes da data agendada! sujeito à cobrança extra no próximo agendamento</Text>

        <View style={styles.observationCheckbox}>
          <CheckBox value={isChecked} onValueChange={toggleCheckBox} style={styles.checkbox}/>
          <Text>Li e concordo!</Text>
        </View>
      </View>

      <View style={styles.buttons}>

        <View style={styles.buttonTwo}>
          <TouchableOpacity style={styles.confirmarButton}>
            <Text style={styles.butonText}>OK</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  </SafeAreaView>
  );
}
