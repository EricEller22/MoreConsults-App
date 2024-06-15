import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList  } from 'react-native' 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {useAppContext} from '../../src/contexts/AppContext'


export default function InstitutePage() {
  const navigation = useNavigation();

  //Variaveis globais do contexto
  const { setInstituteSelected, instituteList, serviceSelected, fetchInstitutesByService } = useAppContext();
  const {nomeUsuario} = useAppContext();

  useEffect(() => {
    if (serviceSelected) {
      fetchInstitutesByService(serviceSelected.id);
    }
  }, [serviceSelected]);
  
  const handleItemClick = (item) => {
    console.log('Item clicado:', item);
    setInstituteSelected(item);
    navigation.navigate("Calendary");
  };

  const handleBackPress = () => {
    setInstituteSelected(null)
    navigation.goBack()
  }


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleItemClick(item)}> 
      <Text style={styles.textButton}>{item.name}</Text>
    </TouchableOpacity>
  );
  
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
          <TouchableOpacity style={styles.touchable} onPress={() => {handleBackPress()}}>
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
          data={instituteList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />

      </View>
    </View>


  </SafeAreaView>
  );
}
