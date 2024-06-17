import React, { useState } from "react";
import { format, parse } from 'date-fns';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../src/contexts/AppContext";

export default function ConfirmDataPage() {
  const navigation = useNavigation();

  const {
    instituteSelected,
    serviceSelected,
    selectedDate, setSelectedDate,
    selectedHour, setSelectedHour,
    currentUser, currentUserId,
    createAppointmentContext,
  } = useAppContext();


// Função para converter a data e hora para o formato ISO 8601
const convertToISO8601 = (date, time) => {
  const [day, month, year] = date.split('/');
  const dateTimeString = `${year}-${month}-${day}T${time}:00.640Z`;
  return format(parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSSX");
}

  const pushInfoAppointment = (
    IdProvider,
    IdService,
    patient,
    selectedDate,
    selectedHour,
  ) => {
    // Criando a data e hora formatada em ISO
    const dateTime = convertToISO8601(selectedDate, selectedHour);
    
    const IdPatient = patient

    createAppointmentContext(
      IdProvider,
      IdService,
      IdPatient,
      dateTime
    );
  };

  const handleConfirmPress = () => {
    pushInfoAppointment(instituteSelected.id, serviceSelected.id, currentUserId, selectedDate, selectedHour);

    setTimeout(() => {
      navigation.navigate("Concluded");
    }, 5000); 
    
  };

  const handleBackPress = () => {
    setSelectedDate(null)
    setSelectedHour(null)
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBlue}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={styles.profileLegend}>Olá {currentUser}! </Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.logo}
            source={require("../../assets/Logo-mais-consultas3.png")}
          />
        </View>
      </View>

      <View style={styles.containerWhite}>
        <View style={styles.backButtonContainer}>
          <View style={styles.buttonContent}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => handleBackPress()}
            >
              <View style={styles.iconContainer}>
                <Icon name="arrow-left" size={20} color="#025E64" />
              </View>
              <Text style={styles.backButton}>Data/Hora</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerLegendTwo}>
          <Text style={styles.legend}>
            Confira abaixo se as informações estão corretas:
          </Text>
        </View>

        <View style={styles.containerData}>
          <View style={styles.dataOne}>
            <Text style={styles.textOne}>Instituição:</Text>
            <Text style={styles.textOne}>Serviço:</Text>
            <Text style={styles.textOne}>Data e hora:</Text>
            <Text style={styles.textOne}>Valor:</Text>
          </View>
          <View style={styles.dataTwo}>
            <Text style={styles.textTwo}>{instituteSelected.name}</Text>
            <Text style={styles.textTwo}>{serviceSelected.name}</Text>
            <Text style={styles.textTwo}>
              {selectedDate} às {selectedHour}
            </Text>
            <Text style={styles.textTwo}>R$ {serviceSelected.price}</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonOne}>
            <TouchableOpacity style={styles.voltarButton} onPress={() => handleBackPress()}>
              <Text style={styles.butonText}>Voltar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonTwo}>
            <TouchableOpacity
              style={styles.confirmarButton}
              onPress={handleConfirmPress}
            >
              <Text style={styles.butonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
