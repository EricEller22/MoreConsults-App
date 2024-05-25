import { SafeAreaView, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../src/contexts/AppContext';


export default function RegisterPage() {
  // Dados do meu usuario
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Mensagens de erro
  const [nomeError, setNomeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [telefoneError, setTelefoneError] = useState('');
  const [dataNascimentoError, setDataNascimentoError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Contexto
  const { createUserContext } = useAppContext();

  // Navegação
  const navigation = useNavigation();

  // Funções de validação
  const validateNome = (nome) => {
    if (nome.length === 0) {
      setNomeError('*Nome inválido');
      return false;
    }
    setNomeError('');
    return true;
  };

  const validateCpf = (cpf) => {
    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpf)) {
      setCpfError('*CPF inválido');
      return false;
    }
    setCpfError('');
    return true;
  };

  const validateTelefone = (telefone) => {
    const telefoneRegex = /^\d{10,11}$/;
    if (!telefoneRegex.test(telefone)) {
      setTelefoneError('*Telefone inválido');
      return false;
    }
    setTelefoneError('');
    return true;
  };

  const validateDataNascimento = (dataNascimento) => {
    const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dataRegex.test(dataNascimento)) {
      setDataNascimentoError('*Data de nascimento inválida');
      return false;
    }
    setDataNascimentoError('');
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('*Email inválido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('*Senha deve ter pelo menos 6 caracteres');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('*As senhas não correspondem');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  //Função disparada ao clicar no botão de registrar
  const handleRegisterPress = async () => {
    const isNomeValid = validateNome(nome);
    const isCpfValid = validateCpf(cpf);
    const isTelefoneValid = validateTelefone(telefone);
    const isDataNascimentoValid = validateDataNascimento(dataNascimento);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

    if (isNomeValid && isCpfValid && isTelefoneValid && isDataNascimentoValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      await createUserContext(nome, cpf, telefone, dataNascimento, email, password);
      navigation.navigate('Login');
    }
  };

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../../assets/Logo-mais-consultas2.png')} />
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
              placeholderTextColor='#5F5959'
              onBlur={() => validateNome(nome)}
            />
            {nomeError ? <Text style={styles.alert}>{nomeError}</Text> : null}
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setCpf(text)}
              value={cpf}
              placeholder='Cpf'
              placeholderTextColor='#5F5959'
              onBlur={() => validateCpf(cpf)}
              keyboardType="numeric"
              maxLength={11}
            />
            {cpfError ? <Text style={styles.alert}>{cpfError}</Text> : null}
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setTelefone(text)}
              value={telefone}
              placeholder='Telefone'
              placeholderTextColor='#5F5959'
              onBlur={() => validateTelefone(telefone)}
            />
            {telefoneError ? <Text style={styles.alert}>{telefoneError}</Text> : null}
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setDataNascimento(text)}
              value={dataNascimento}
              placeholder='Data de nascimento'
              placeholderTextColor='#5F5959'
              onBlur={() => validateDataNascimento(dataNascimento)}
              keyboardType="numeric"
            />
            {dataNascimentoError ? <Text style={styles.alert}>{dataNascimentoError}</Text> : null}
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder='Email'
              placeholderTextColor='#5F5959'
              onBlur={() => validateEmail(email)}
            />
            {emailError ? <Text style={styles.alert}>{emailError}</Text> : null}
          </View>

          <View style={styles.containerInputPassword}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder='Senha'
              placeholderTextColor='#5F5959'
              secureTextEntry
              onBlur={() => validatePassword(password)}
            />
            {passwordError ? <Text style={styles.alert}>{passwordError}</Text> : null}
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              placeholder='Confirme a senha'
              placeholderTextColor='#5F5959'
              secureTextEntry
              onBlur={() => validateConfirmPassword(password, confirmPassword)}
            />
            {confirmPasswordError ? <Text style={styles.alert}>{confirmPasswordError}</Text> : null}
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
