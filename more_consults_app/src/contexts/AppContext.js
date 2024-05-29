import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

//Contexto uqe engloba todas as telas do APP,
export const AppProvider = ({ item }) => {
  //Instituição selecionada
  const [instituteSelected, setInstituteSelected] = useState(null);

  //Data e hora selecionados
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  //Função que reseta os dados ao final de um agendamento
  const resetData = () => {
    setInstituteSelected(null);
    setServiceSelected(null);
    setSelectedDate(null);
    setSelectedHour(null);
  };

  //USUARIOS
  //Função que cria um usuário no banco
  const urlPatient = 'http://172.20.13.155:5107/api'

  const createUserContext = async (
    cpf,
    name,
    phoneNumber,
    birthdayDate,
    email,
    password
  ) => {
    const newUser = { cpf, name, phoneNumber, birthdayDate, email, password };
    console.log(newUser)
    const response = axios.post(`${urlPatient}/patient`, newUser, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => console.log(error));
    // try {
    //   if (response.status === 201) {
    //     console.log("Usuário criado com sucesso");
    //     setUserList([...userList, newUser]);
    //   } else {
    //     console.error("Erro ao registrar usuário", response.data);
    //   }
    // } catch (error) {
    //   console.error("Erro ao registrar usuário", error);
    // }
  };

  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  //Função que busca um usuário no banco
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${urlPatient}/patient`);
      if (response.status === 200) {
        USERS.push(response.data);
      } else {
        console.error("Erro ao obter usuários", response.data);
      }
    } catch (error) {
      console.error("Erro ao obter usuários", error);
    }
  };

  //Função que faz a parte de login
  const loginUser = async (cpf, password) => {
    try {
      const response = await axios.post("url/login", { cpf, password });
      if (response.status === 200) {
        setCurrentUser(response.data.user);
        setLoginError("");
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
  const [serviceSelected, setServiceSelected] = useState(null);
  const [instituteList, setInstituteList] = useState([]);
  const urlProvider = 'http://172.20.13.155:5107/api'

  const fetchInstitutesByService = async (serviceId) => {
    try {
      const response = await axios.get(`${urlProvider}/provider?idService=${serviceId}`);
      if (response.status === 200) {
        setInstituteList(response.data);
        console.log(response.data)
      } else {
        console.error("Erro ao obter instituições", response.data);
      }
    } catch (error) { 
      console.error("Erro ao obter instituições", error);
    }

  };

  //SERVIÇOS
  const [services, setServices] = useState([]);
  const urlService = "http://172.20.13.155:5107/api";

  const fetchServices = async () => {
    
    try {
      const response = await axios.get(`${urlService}/service`);
      console.log(response);
      if (response.status === 200) {
        setServices(response.data);
        console.log(services)
      } else {
        console.error("Erro ao obter serviços", response.data);
      }
    } catch (error) {
      console.error("Erro ao obter serviços2", error);
      
    }
    

  };

  //DATA E HORA

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
        fetchUsers,
        loginUser,
        loginError,
        currentUser,
        instituteList,
        fetchInstitutesByService,
        services,
        fetchServices,
      }}
    >
      {item}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
