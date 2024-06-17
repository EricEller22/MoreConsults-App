import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

//Contexto uqe engloba todas as telas do APP,
export const AppProvider = ({ item }) => {
  //Dados selecionados
  const [instituteSelected, setInstituteSelected] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [serviceSelected, setServiceSelected] = useState(null);

  //Função que reseta os dados ao final de um agendamento
  const resetData = () => {
    setInstituteSelected('');
    setServiceSelected('');
    setSelectedDate('');
    setSelectedHour('');
  };

  //USUARIOS
  //Função que cria um usuário no banco
  const baseUrl = "http://192.168.0.48:5107/api";
                          
  const createUserContext = async (
    cpf,
    name,
    phoneNumber,
    birthdayDate,
    email,
    password
  ) => {
    const formattedBirthdayDate = birthdayDate.toISOString();
    const newUser = {
      cpf,
      name,
      phoneNumber,
      birthdayDate: formattedBirthdayDate,
      email,
      password,
    };
    console.log("Dados do novo usuário:", newUser);

    try {
      const response = await axios.post(`${baseUrl}/patient`, newUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Usuário criado com sucesso");
        ToastAndroid.show("Usuário criado com sucesso !", ToastAndroid.SHORT);
      } else {
        console.error("Erro ao registrar usuário", response.data);
        console.log(response.status);
      }
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        console.error("Erro na resposta da API:", error.response.data);
        console.error("Status do erro:", error.response.status);
        console.error("Cabeçalhos do erro:", error.response.headers);
      } else if (error.request) {
        // A requisição foi feita mas nenhuma resposta foi recebida
        console.error("Erro na requisição:", error.request);
      } else {
        // Algo aconteceu ao configurar a requisição que desencadeou um erro
        console.error("Erro:", error.message);
      }
      console.error("Configuração do erro:", error.config);
    }
  };

  //Função que busca um usuário no banco
  
  const [loginError, setLoginError] = useState("");

  //Função que faz a parte de login
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${baseUrl}/patient/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        setCurrentUser(response.data.name);
        setCurrentUserId(response.data.id)
        //console.log(response.data)
        setLoginError("");

        await AsyncStorage.setItem("Token", response.data.token);
        const value = await AsyncStorage.getItem("Token");
        console.log("Token: ", value);
      }

    } catch (error) {
      if (error.response && error.response.status === 404) {
        setLoginError("Usuário não encontrado");
      } else if (error.response && error.response.status === 401) {
        setLoginError("Senha incorreta");
      } else {
        setLoginError("Erro ao fazer login");
      }
    }
  };

  //INSTITUIÇÕES
  const [instituteList, setInstituteList] = useState([]);

  const fetchInstitutesByService = async (serviceId) => {
    try {
      const value = await AsyncStorage.getItem("Token");
      //console.log(value);

      const response = await axios.get(
        `${baseUrl}/provider?idService=${serviceId}`,
        {
          headers: {
            Authorization: `Bearer ${value}`,
          },
        }
      );
      if (response.status === 200) {
        setInstituteList(response.data);
        console.log(response.data);
      } else {
        console.error("Erro ao obter instituições", response.data);
      }
    } catch (error) {
      console.error("Erro ao obter instituições", error);
    }
  };

  //SERVIÇOS
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const value = await AsyncStorage.getItem("Token");
      //console.log(value);

      const response = await axios.get(`${baseUrl}/service`, {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      });
      //console.log(response);

      if (response.status === 200) {
        setServices(response.data);
        console.log(services);
      } else {
        console.error("Erro ao obter serviços", response.data);
      }
    } catch (error) {
      console.error("Erro ao obter serviços2", error);
    }
  };

  //DATA E HORA
  const [times, setTimes] = useState([])

  const fetchTime = async (idProvider, idService, DataConsulta) => {
    try {
      const value = await AsyncStorage.getItem("Token");

      const response = await axios.get(`${baseUrl}/appointment/times?idProvider=${idProvider}&idService=${idService}&DataConsulta=${DataConsulta}`, {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      });
      //console.log(response);

      if (response.status === 200) {
        setTimes(response.data);
        console.log(times);
      } else {
        console.error("Erro ao obter horarios", response.data);
      }
    } catch (error) {
      console.error("Erro ao obter horarios", error);
    }
  };

  //Informações de agendamento


  const createAppointmentContext = async (
    IdProvider,
    IdService,
    IdPatient,
    DateTime
  ) => {

    const newAppointment = {
      IdService,
      IdProvider,
      IdPatient,
      DateTime
    };

    console.log("Dados da nova consulta:", newAppointment);

    try {
      const value = await AsyncStorage.getItem("Token");

      const response = await axios.post(`${baseUrl}/appointment`, newAppointment, {
        headers: {
          Authorization: `Bearer ${value}`,
          "Content-Type": "application/json",
        },
      });

      const appointmentRelized = () => {
        const aptm = response.data.id;
        console.log(response.data.id);
        fetchAppointment(response.data.id);
      }

      if (response.status === 200) {
        console.log("Consulta criada com sucesso");
        appointmentRelized();

        ToastAndroid.show("Consulta marcada com sucesso !", ToastAndroid.SHORT);
      } else {
        console.error("Erro ao marcar consulta", response.data);
        console.log(response.status);
      }
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        console.error("Erro na resposta da API:", error.response.data);
        console.error("Status do erro:", error.response.status);
        console.error("Cabeçalhos do erro:", error.response.headers);
      } else if (error.request) {
        // A requisição foi feita mas nenhuma resposta foi recebida
        console.error("Erro na requisição:", error.request);
      } else {
        // Algo aconteceu ao configurar a requisição que desencadeou um erro
        console.error("Erro:", error.message);
      }
      console.error("Configuração do erro:", error.config);
      console.erro(error)
    }
  };

  //Puxa as informações do agendamento
  const [appointmentData, setAppointmentData] = useState({})

  const fetchAppointment = async (appointment) => {
    try {
      const value = await AsyncStorage.getItem("Token");

      const response = await axios.get(`${baseUrl}/appointment/${appointment}`, {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      });
      console.log(response)

      if (response.status === 200) {
        console.log(response.data);
        setAppointmentData(response.data);
        
      } else {
        console.error("Erro ao obter consulta", response.data);
      }
    } catch (error) {
      console.error("Erro ao obter consulta", error);
      console.error("Erro ao obter consulta2", error.config);
      console.error("Erro ao obter consulta3", error.request);
    }
  };


  return (
    <AppContext.Provider
      value={{
        serviceSelected,
        setServiceSelected,
        instituteSelected,
        setInstituteSelected,
        selectedDate,
        setSelectedDate,
        selectedHour,
        setSelectedHour,
        resetData,
        createUserContext,
        loginUser,
        loginError,
        currentUser,
        instituteList,
        fetchInstitutesByService,
        services,
        fetchServices,
        fetchTime,
        times,
        createAppointmentContext,
        currentUser,
        currentUserId,
        fetchAppointment,
        appointmentData,
      }}
    >
      {item}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
