import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
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
    appointmentData,

  } = useAppContext();

  const handleConfirmPress = () => {
    navigation.navigate("Home");
  };


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
            <Text style={styles.textOne}>Instituição: </Text>
            <Text style={styles.textOne}>Contato:</Text>
            <Text style={styles.textOne}>E-mail:</Text>
            <Text style={styles.textOne}>Serviço:</Text>
            <Text style={styles.textOne}>Valor:</Text>
            <Text style={styles.textOne}>Data e hora:</Text>
            <Text style={styles.textOne}>Doutor(a):</Text>
            <Text style={styles.textOne}>Endereço:</Text>
            
          </View>
          <View style={styles.dataTwo}>
          <Text style={styles.textTwo}>{appointmentData.provider.name}</Text>
            <Text style={styles.textTwo}>{appointmentData.provider.phoneNumber}</Text>
            <Text style={styles.textTwo}>{appointmentData.provider.email}</Text>
            <Text style={styles.textTwo}>{serviceSelected.name}</Text>
            <Text style={styles.textTwo}>R$ {serviceSelected.price}</Text>
            <Text style={styles.textTwo}>
              {selectedDate} as {selectedHour}
            </Text>
            <Text style={styles.textTwo}>{appointmentData.professional.name}</Text>
            <Text style={styles.textTwo}>{appointmentData.provider.address.lineOne} - {appointmentData.provider.address.lineTwo} - {appointmentData.provider.address.city} - {appointmentData.provider.address.state}</Text>
            
            
          </View>
        </View>

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
