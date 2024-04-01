import { SafeAreaView, Text, Image, TextInput, TouchableOpacity, View   } from 'react-native' 
import {useState} from  'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../src/contexts/AppContext';

export default function LoginPage() {
  const [alert, setAlert] = useState('');

  const {cpf, setCpf} = useAppContext();
  const {password, setPassword} = useAppContext();

  const navigation = useNavigation();

  const loginValidade = () =>{
    if(cpf !== "" && password !== ""){
      //Método que vê se o usuário está na base de dados e com a senha correta
      navigation.navigate("Menu");
    }
    else{ 
      setAlert("*Cpf ou Senha incorretos!");
    }

  }

  const handleLoginPress = () => {
    loginValidade();
  }

  return(
  <SafeAreaView style={styles.container}>
  
    <View style={styles.containerLogo}>
      <Image
        style={styles.logo} 
        source={require('../../assets/Logo-mais-consultas2.png')}
      />
    </View> 

    <View style={styles.inputs}>
    
      <View style={styles.containerInput}>
      <TextInput  
          style={styles.input}
          onChangeText={(text) => setCpf(text)}
          value={cpf}
          placeholder='Cpf'
          placeholderTextColor="#FFF"
      />
      </View>
      <View style={styles.containerInput}>
      <TextInput 
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder='Password'
          placeholderTextColor="#FFF"
      />
      </View>

      <Text style={styles.alert}>{alert}</Text>
    </View>

    <View style={styles.buttons}>
      <View style={styles.buttonOne}>
        <TouchableOpacity style={styles.entrarButton} onPress={handleLoginPress}>
          <Text style={styles.butonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.legend}><Text>Esqueceu sua senha?</Text></TouchableOpacity>
      </View>

      <View style={styles.buttonTwo}>
        <Text>Ainda não possui uma conta?</Text>
        <TouchableOpacity style={styles.criarButton} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.butonText}>Criar</Text>
        </TouchableOpacity>
      </View>


    </View>

  </SafeAreaView>
  );
}
