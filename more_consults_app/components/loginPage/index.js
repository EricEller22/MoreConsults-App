import { SafeAreaView, Text, Image, TextInput, TouchableOpacity, View   } from 'react-native' 
import {useState} from  'react'
import styles from './styles'

export default function LoginPage() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');


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
    </View>

    <View style={styles.buttons}>

      <View style={styles.buttonOne}>
        <TouchableOpacity style={styles.entrarButton}>
          <Text style={styles.butonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.legend}><Text>Esqueceu sua senha?</Text></TouchableOpacity>
      </View>

      <View style={styles.buttonTwo}>
        <Text>Ainda não possui uma conta?</Text>
        <TouchableOpacity style={styles.criarButton}>
          <Text style={styles.butonText}>Criar</Text>
        </TouchableOpacity>
      </View>


    </View>

  </SafeAreaView>
  );
}
