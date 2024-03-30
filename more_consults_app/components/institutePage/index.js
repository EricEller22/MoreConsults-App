import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { useState } from 'react';

export default function ServicePage() {
  const [serviceSelected ,setServiceSelected] = useState(null);

  const data = [
    { key: '1', instituteName: 'policlínica uvv' },
    { key: '2', instituteName: 'hucam' },
  ];
  
  const handleItemClick = (item) => {
    console.log('Item clicado:', item);
    setServiceSelected(item.instituteName);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleItemClick(item)}> 
      <Text style={styles.textButton}>{item.instituteName}</Text>
    </TouchableOpacity>
  );
  
  return(
  <SafeAreaView style={styles.container}>

    <View style={styles.containerBlue}>
      
      <View style={styles.header}>
      
        <View>
          <TouchableOpacity><Text style={styles.profileLegend}>Olá "___" !</Text></TouchableOpacity>
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
            <Text style={styles.backButton}>Serviços</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerLegendTwo}>
        <Text style={styles.legend}>Selecione em qual instituição deseja ser atendido(A):</Text>
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
