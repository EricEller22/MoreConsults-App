import React, {createContext, useContext, useEffect, useState} from 'react';

export const AppContext = createContext();

//Contexto uqe engloba todas as telas do APP,
export const AppProvider = ({item}) =>{
  //Email do usuário
  //const [emailUsuario, setEmailUsuario] = useState('');

  const [nomeUsuario, setNomeUsuario] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');


  const [serviceSelected, setServiceSelected] = useState(null);
  
  const [instituteSelected ,setInstituteSelected] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const resetData = () => {
    setInstituteSelected(null);
    setServiceSelected(null);
    setSelectedDate(null);
    setSelectedHour(null);
  }

  useEffect(() => {
  }, []);

  //Carrinho
  //const [carrinho, setCarrinho] = useState([])
  //Produtos obtidos do array de MERCADORIAS
  //const [produtosContext, setProdutosContext] = useState(MERCADORIAS);
  //Guarda a quantidade de vendas após uma ser efetuada
  //const [numeroVendas, setNumeroVendas] = useState(0)
  //Guarda qual linguagem a aplicação está
  //const [lang, setLang] = useState('pt_br')
 
  //Adiciona os dados correntes do usuario aos estados de nomeDoUsuario e emailUsuario para serem acessados de qualquer lugar da aplicação 
  //const guardaUser = (email, nome) => {
   // setEmailUsuario(email);
   // setNomeUsuario(nome)
  //};

  //Recebe um item como parametro e o adiciona ao array do carrinho (Função chamada na tela de detalhes do produto de acordo com os dados daquele produto)
  //const adicionarAoCarrinho = (item) =>{
   //   setCarrinho([...carrinho, item]); 
  //}

  //Faz uma contagem simples da quantidade de vendas realizadas por sessao
  //const adicionarVenda = () =>{
  //    setNumeroVendas((venda) => venda + 1)
  // }
 
  //Limpa o carrinho
  //const limparCarrinho = () =>{ 
  //  setCarrinho([])
  //}


  
  return(
      <AppContext.Provider 
        value={{nomeUsuario, setNomeUsuario, serviceSelected, setServiceSelected, instituteSelected ,setInstituteSelected, 
                selectedDate, setSelectedDate, selectedHour, setSelectedHour,  resetData, cpf, setCpf, password, setPassword}}>
        
        {item}
      </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext)