import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ServicePage() {
  const navigation = useNavigation();

  const [serviceSelected, setServiceSelected] = useState(null);
  

  const data = [
    { key: '1', serviceName: 'psicologia' },
    { key: '2', serviceName: 'fisioterapia' },
    { key: '3', serviceName: 'oftamologia' },
  ];
  
  const handleItemClick = (item) => {
    console.log('Item clicado:', item);
    setServiceSelected(item.serviceName);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleItemClick(item)}> 
      <Text style={styles.textButton}>{item.serviceName}</Text>
    </TouchableOpacity>
  );

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
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>


  </SafeAreaView>
  );
}
