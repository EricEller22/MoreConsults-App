import { SafeAreaView, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../src/contexts/AppContext';

export default function LoginPage() {
  const [alert, setAlert] = useState('');

  const { loginUser, loginError} = useAppContext();

  const [email, setEmail] = useState('eric.eller@gmail.com');
  const [password, setPassword] = useState('Eric.9982');

  const navigation = useNavigation();

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLoginPress = async () => {
    if (!validatePassword(password)) {
      setAlert("*A senha deve conter pelo menos 6 caracteres.");
      return;
    }

    
    await loginUser(email, password);
    if (!loginError) {
      navigation.navigate("Menu");
    } else {
      setAlert(loginError);
    }
  };

  useEffect(() => {
   
  }, []);

  return (
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
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder='Email'
            placeholderTextColor="#FFF"
             
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder='Senha'
            placeholderTextColor="#FFF"
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.alert}>{alert}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.buttonOne}>
          <TouchableOpacity style={styles.entrarButton} onPress={handleLoginPress}>
            <Text style={styles.butonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.legend}>
            <Text>Esqueceu sua senha?</Text>
          </TouchableOpacity>
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
