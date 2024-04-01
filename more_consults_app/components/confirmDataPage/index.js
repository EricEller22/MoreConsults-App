import { SafeAreaView, Text, Image, View, TouchableOpacity  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../src/contexts/AppContext';

export default function ConfirmDataPage() {
  const navigation = useNavigation();

  const {instituteSelected, serviceSelected, selectedDate, selectedHour, nomeUsuario} = useAppContext();


  const handleConfirmPress = () => {
    navigation.navigate("Concluded")
  };


  return(
  <SafeAreaView style={styles.container}>

    <View style={styles.containerBlue}>
      
      <View style={styles.header}>
      
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}><Text style={styles.profileLegend}>Olá {nomeUsuario}! </Text></TouchableOpacity>
        </View>

        <Image
          style={styles.logo}
          source={require('../../assets/Logo-mais-consultas3.png')}
        />
      </View>
    </View>
    
 
    
    <View style={styles.containerWhite}>

    <View style={styles.backButtonContainer}>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
            <View style={styles.iconContainer}>
              <Icon name="arrow-left" size={20} color="#025E64" />
            </View>
            <Text style={styles.backButton}>Data/Hora</Text>
          </TouchableOpacity>
        </View>
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
          <Text style={styles.textTwo}>{instituteSelected}</Text>
          <Text style={styles.textTwo}>{serviceSelected}</Text>
          <Text style={styles.textTwo}>{selectedDate} as {selectedHour}</Text>
          <Text style={styles.textTwo}>{}</Text>
        </View>
      </View>

     <View style={styles.buttons}>
        <View style={styles.buttonOne}>
          <TouchableOpacity style={styles.voltarButton}>
            <Text style={styles.butonText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonTwo}>
          <TouchableOpacity style={styles.confirmarButton} onPress={handleConfirmPress}>
            <Text style={styles.butonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  </SafeAreaView>
  );
}
