import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../src/contexts/AppContext";
import styles from "./styles";

export default function CalendaryPage() {
  const { selectedDate, setSelectedDate, instituteSelected, serviceSelected, times, fetchTime, currentUser } = useAppContext();
  const { selectedHour, setSelectedHour } = useAppContext();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const navigation = useNavigation();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); // Fecha o DateTimePicker após seleção da data
    setDate(currentDate);
    const newSelectedDate = currentDate.toISOString().split('T')[0];
    if (newSelectedDate !== selectedDate) {
      const dataFormated = formatDate(newSelectedDate)
      setSelectedDate(dataFormated); // Atualiza o estado com a nova data selecionada
      console.log(newSelectedDate)
    }
  };

  useEffect(() => {
    if (selectedDate) {
      const DataConsulta = `${selectedDate}T00:00:00`;
      fetchTime(instituteSelected, serviceSelected, DataConsulta);
    }
  }, [selectedDate, instituteSelected, serviceSelected]); // Atualiza sempre que selectedDate, instituteSelected ou serviceSelected forem alterados

  const showDatepicker = () => {
    setShow(true);
  };

  const handleItemPress = (index) => {
    const selectedHour = times[index].time; // Obtém o horário selecionado
    if (selectedHour === times[index].time) {
      setSelectedHour(selectedHour);
    }
  };

  const renderItem = ({ item, index }) => {
    const itemStyle = item.time === selectedHour ? styles.selectedItem : styles.availableItem;

    return (
      <TouchableOpacity style={[styles.itemContainer, itemStyle]} onPress={() => handleItemPress(index)}>
        <Text>{item.time}</Text>
      </TouchableOpacity>
    );
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBlue}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text style={styles.profileLegend}>Olá {currentUser}!</Text>
          </TouchableOpacity>
          <Image style={styles.logo} source={require("../../assets/Logo-mais-consultas3.png")} />
        </View>
        <View style={styles.containerLegend}>
          <Text style={styles.legend}>
            Agende agora o serviço que você precisa, de forma simples, fácil e rápida
          </Text>
        </View>
      </View>
      <View style={styles.containerWhite}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
            <View style={styles.iconContainer}>
              <Icon name="arrow-left" size={20} color="#025E64" />
            </View>
            <Text style={styles.backButton}>Instituições</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerCalendary}>
          <TouchableOpacity
            onPress={showDatepicker}
            style={styles.buttonContainerCalendar}
          >
            <Text style={styles.textButtonContainerCalendar}>
              Selecione a data clicando aqui:
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
              minimumDate={new Date()} // Definindo a data mínima como hoje
              maximumDate={new Date(new Date().getFullYear(), 11, 31)} // Definindo a data máxima como o final do ano atual
              dateFormat="dayofweek day month"
            />
          )}
        </View>
        <View style={styles.listHours}>
          <FlatList
            data={times}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />
        </View>
        <View>
          <Text>Data selecionada: {selectedDate ? selectedDate : 'Nenhuma data selecionada'}</Text>
          <Text>Hora selecionada: {selectedHour}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.confirmarButton} onPress={() => navigation.navigate("ConfirmData")}>
            <Text style={styles.butonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

