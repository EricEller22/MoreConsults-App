import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#43B4BB',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo:{
    width: '300px',
    height: '20%', 
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  logo:{ 
    width: '300px',
    height: '50px', 
    margin: 10,
    position: 'fixed',
  },
  inputs:{
    width: "70%",
    height: "30%",
  },
  containerInput:{
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: "100%",
    height: "20px",
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
    width: "200px",
    height: "30px",
    backgroundColor: "#025E64",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: "20px",
    margin: 5,
  },
  criarButton:{
    width: "80px",
    height: "30px",
    backgroundColor: "#025E64",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: "20px",
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
  }
  

})

export default styles;