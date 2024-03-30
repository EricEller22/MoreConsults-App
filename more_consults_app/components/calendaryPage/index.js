import { SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView, FlatList, Dimensions,Button  } from 'react-native' 
import {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');

export default function CalendaryPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null)

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; 
    setDate(currentDate);
  };
  
  useEffect(() => {
    setSelectedDate(date.toLocaleDateString());
  }, [date]); 


  const showDatepicker = () => {
    setShow(true);
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 é Domingo e 6 é Sábado
  };


 
  //Lista de horários
  const [data, setData] = useState([
    { id: "1", title: "08:00", available: true },
    { id: "2", title: "08:30", available: true },
    { id: "3", title: "09:00", available: true },
    { id: "4", title: "09:30", available: true },
    { id: "5", title: "10:00", available: true },
    { id: "6", title: "10:30", available: true },
    { id: "7", title: "11:00", available: true },
    { id: "8", title: "11:30", available: true },
    { id: "9", title: "12:00", available: true },
    { id: "10", title: "12:30", available: true },
    { id: "11", title: "13:00", available: true },
    { id: "12", title: "13:30", available: true },
    { id: "13", title: "14:00", available: true },
    { id: "14", title: "14:30", available: true },
    { id: "15", title: "15:00", available: true },
    { id: "16", title: "15:30", available: true },
    { id: "17", title: "16:00", available: true },
    { id: "18", title: "16:30", available: true },
    { id: "19", title: "17:00", available: true },
    { id: "20", title: "17:30", available: true },
  ]);

  //Método disparado ao clicar em um horário
  const handleItemPress = (index) => {
    const newData = [...data];
    newData[index].available = !newData[index].available;
    setData(newData);

    const selectedHour = data[index].title; // Obtém o horário selecionado
    setSelectedHour(selectedHour); // Atualiza o estado com o horário selecionado
  };
  

  //Horário renderizado de acordo com a lista
  const renderItem = ({ item, index }) => {
    const itemStyle = item.available ? styles.availableItem : styles.unavailableItem;

    return (
        <View style={[styles.itemContainer, itemStyle]}>
        <TouchableOpacity onPress={() => handleItemPress(index)}>
          <Text>{item.title}</Text>
      </TouchableOpacity>
      </View>
    );
  };

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
            <Text style={styles.backButton}>Intituições</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerCalendary}>
        <TouchableOpacity onPress={showDatepicker} style={styles.buttonContainerCalendar}><Text style={styles.textButtonContainerCalendar}>Selecione a data clicando aqui:</Text></TouchableOpacity>
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
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={4}
        />

      </View>
      
      <View>
        <Text>Data selecionada: {selectedDate}</Text>
        <Text>Hora selecionada: {selectedHour}</Text>
      </View>

      <View style={styles.buttons}>
        <View>
          <TouchableOpacity style={styles.confirmarButton}>
            <Text style={styles.butonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
    

  </SafeAreaView>
  );
}
