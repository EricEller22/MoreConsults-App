import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#43B4BB',
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43B4BB',
  },
  containerLogo:{
    width: 300,
    height: '20%', 
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  logo:{ 
    width: 300,
    height: 50, 
    margin: 10,
  },
  inputs:{
    width: "70%",
    height: "30%",
  },
  containerInput:{
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: "100%",
    height: 20,
    marginTop: 50,
  },
  input:{
    color: '#FFF', 
    fontSize: 16,
    marginTop: -5,
  },
  buttons:{
    width: "100%",
    height: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entrarButton:{
    width: 200,
    height: 35,
    backgroundColor: "#025E64",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 20,
    margin: 5,
  },
  criarButton:{
    width: 80,
    height: 35,
    backgroundColor: "#025E64",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 20,
    margin: 5,
  },
  butonText:{
    color: "#FFF",
  },
  buttonOne:{
    alignItems: "center",
    
  },
  buttonTwo:{
    alignItems: "center",
   
  },
  legend:{
    textDecorationLine: 'underline'
  },
  alert:{
    marginTop: 10,
    color: "#F00",
    fontSize: 14,
  },
  

})

export default styles;