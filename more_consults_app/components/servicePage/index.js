import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {useAppContext} from '../../src/contexts/AppContext'

export default function ServicePage() {
  const navigation = useNavigation();

  //Variaveis globais do meu contexto
  const { setServiceSelected, fetchInstitutesByService, fetchServices, services } = useAppContext();
  const {nomeUsuario} = useAppContext();
   
  const handleServiceClick = (service) => {
    console.log('Item clicado:', service);

    setServiceSelected(service);
    fetchInstitutesByService(service.id);

    navigation.navigate("Institutes")
  };

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleServiceClick(item)}> 
      <Text style={styles.textButton}>{item.serviceName}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchServices();
  }, []);

  return(
  <SafeAreaView style={styles.container}>

    <View style={styles.containerBlue}>
      
      <View style={styles.header}>
      
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}><Text style={styles.profileLegend}>Olá {nomeUsuario} !</Text></TouchableOpacity>
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
          <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
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
        <FlatList
          data={services}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderServiceItem}
        />
      </View>
    </View>


  </SafeAreaView>
  );
}
