import { SafeAreaView, Text, Image, TextInput, TouchableOpacity, View   } from 'react-native' 
import {useState} from  'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function RegisterPage() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleRegisterPress = () =>{

    navigation.navigate("Login");
  }

  return(
  <SafeAreaView style={styles.container}>
  
    <View style={styles.containerLogo}>
      <Image
        style={styles.logo}
        source={require('../../assets/Logo-mais-consultas2.png')}
      />
    </View> 

    <View style={styles.containerInputs}>

      <Text style={styles.title}>Cadastre-se</Text>


      <View style={styles.inputs}>
      
        <View style={styles.containerInput}>
        <TextInput 
            style={styles.input}
            onChangeText={(text) => setNome(text)}
            value={nome}
            placeholder='Nome'
            placeholderTextColor="#5F5959"
        />
        </View>
        <View style={styles.containerInput}>
        <TextInput 
            style={styles.input}
            onChangeText={(text) => setCpf(text)}
            value={cpf}
            placeholder='Cpf'
            placeholderTextColor="#5F5959"
        />
        </View>
        <View style={styles.containerInput}>
        <TextInput 
            style={styles.input}
            onChangeText={(text) => setTelefone(text)}
            value={telefone}
            placeholder='Telefone'
            placeholderTextColor="#5F5959"
        />
        </View>
        <View style={styles.containerInput}>
        <TextInput 
            style={styles.input}
            onChangeText={(text) => setDataNascimento(text)}
            value={dataNascimento}
            placeholder='Data de nascimento'
            placeholderTextColor="#5F5959"
        />
        </View>
        <View style={styles.containerInput}>
        <TextInput 
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder='Email'
            placeholderTextColor="#5F5959"
        />
        </View>
        
        <View style={styles.containerInputPassword}>
        <TextInput 
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder='Senha'
            placeholderTextColor="#5F5959"
        />
        </View>
        <View style={styles.containerInput}>
        <TextInput 
            style={styles.input}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            placeholder='Confirme a senha'
            placeholderTextColor="#5F5959"
        />
        </View>

      </View>

      <View style={styles.buttons}>

        <View style={styles.buttonOne}>
          <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
            <Text style={styles.butonText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonTwo}>
          <TouchableOpacity style={styles.cadastrarButton} onPress={handleRegisterPress}>
            <Text style={styles.butonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>



  </SafeAreaView>
  );
}
