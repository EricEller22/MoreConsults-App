import { SafeAreaView, Text, Image, View, TouchableOpacity  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

export default function ServicePage() {
  
  return(
  <SafeAreaView style={styles.container}>

    <View style={styles.containerBlue}>
      
      <View style={styles.header}>
      
        <View>
          <TouchableOpacity><Text style={styles.profileLegend}>Olá "___" ! </Text></TouchableOpacity>
        </View>

        <Image
          style={styles.logo}
          source={require('../../assets/Logo-mais-consultas3.png')}
        />
      </View>

      <View style={styles.containerLegend}>
        <Text style={styles.legend}>Agende agora o serviço que você precisa, de forma simples, fácil e rápida</Text>
      </View>

    </View> 
    

    
    <View style={styles.containerWhite}>

      <View style={styles.backButtonContainer}>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.touchable} onPress={() => {}}>
            <View style={styles.iconContainer}>
              <Icon name="arrow-left" size={20} color="#025E64" />
            </View>
            <Text style={styles.backButton}>Início</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerLegendTwo}>
        <Text style={styles.legend}>Selecione qual serviço você deseja:</Text>
      </View>

      <View style={styles.buttons}>
      
        <TouchableOpacity style={styles.button}> 
          <Text style={styles.textButton}>Psicologia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}> 
          <Text style={styles.textButton}>Fisioterapia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}> 
          <Text style={styles.textButton}>Oftamologia</Text>
        </TouchableOpacity>

      </View>
    </View>


  </SafeAreaView>
  );
}
