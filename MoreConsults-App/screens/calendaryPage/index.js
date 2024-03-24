import { SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView  } from 'react-native' 
import {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { Calendar } from 'react-native-calendars';

export default function CalendaryPage() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
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
         <Text style={styles.backButton}><TouchableOpacity>Option </TouchableOpacity></Text>
      </View>

      <View style={styles.containerLegendTwo}>
        <Text style={styles.legend}>Selecione em qual instituição deseja ser atendido(A):</Text>
      </View>
    
      <View style={styles.containerCalendary}>
        <Calendar
          markedDates={{ [selectedDate]: { selected: true, selectedColor: '#025E64' } }}
          onDayPress={(day) => handleDateSelect(day)}
          hideExtraDays={true}
          
          locale={{
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
           }}
          theme={{
            backgroundColor: '#ACF5FA',
            calendarBackground: '#ACF5FA',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#007bff',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#025E64',
            textDisabledColor: '#d9e1e8',
            dotColor: '#025E64',
            selectedDotColor: '#F00',
            arrowColor: '#025E64',
            disabledArrowColor: '#025E64',
            monthTextColor: '#025E64',
            indicatorColor: '#025E64',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          
      
        />
      </View>
    </View>
    

  </SafeAreaView>
  );
}
