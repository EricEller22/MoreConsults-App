import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "./styles";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../src/contexts/AppContext";

export default function ConcludedPage() {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const {
    instituteSelected,
    serviceSelected,
    selectedDate,
    selectedHour,
    currentUser,
    resetData,
  } = useAppContext();

  const handleConfirmPress = () => {
    resetData();
    navigation.navigate("Home");
  };

  //Função para puxar o medico
  //Função para o endereço
  //Função para persistir a consulta no banco dados
  //Se sobrar tempo, puxar todos os agendamentos e os status, e apresentalos na tela de historico


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBlue}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={styles.profileLegend}>Olá {currentUser}!</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.logo}
            source={require("../../assets/Logo-mais-consultas3.png")}
          />
        </View>
      </View>

      <View style={styles.containerWhite}>
        <View style={styles.containerLegendTwo}>
          <Text style={styles.title}>Agendamento concluido</Text>
          <Text style={styles.legend}>
            Confira a baixo todos os dados sobre o agendamento:
          </Text>
        </View>

        <View style={styles.containerData}>
          <View style={styles.dataOne}>
            <Text style={styles.textOne}>Instituição:</Text>
            <Text style={styles.textOne}>Serviço:</Text>
            <Text style={styles.textOne}>Data e hora:</Text>
            <Text style={styles.textOne}>Doutor(a):</Text>
            <Text style={styles.textOne}>Endereço:</Text>
            <Text style={styles.textOne}>Valor:</Text>
          </View>
          <View style={styles.dataTwo}>
            <Text style={styles.textTwo}>{instituteSelected.name}</Text>
            <Text style={styles.textTwo}>{serviceSelected.name}</Text>
            <Text style={styles.textTwo}>
              {selectedDate} as {selectedHour}
            </Text>
            <Text style={styles.textTwo}>{}</Text>
            <Text style={styles.textTwo}>{}</Text>
            <Text style={styles.textTwo}>R$ {serviceSelected.price}</Text>
          </View>
        </View>

        {/** 
      <View style={styles.observation}>
        <Text style={styles.observationText}>Prazo máximo para cancelamento de até 3 dias úteis antes da data agendada! sujeito à cobrança extra no próximo agendamento</Text>

        
        <View style={styles.observationCheckbox}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
        />
          <Text>Li e concordo!</Text>
        </View>
      </View>
      */}

        <View style={styles.buttons}>
          <View style={styles.buttonTwo}>
            <TouchableOpacity
              style={styles.confirmarButton}
              onPress={handleConfirmPress}
            >
              <Text style={styles.butonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
