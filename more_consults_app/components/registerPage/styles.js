import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#43B4BB',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  containerLogo:{
    width: '300px',
    height: '30%', 
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  logo:{ 
    width: '300px',
    height: '50px', 
    margin: 10,
  },
  title:{
    fontSize: 30,
    fontWeight: 700,
    margin: 5,
  },


  containerInputs:{
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: "80%",
    height: "60%",
    alignItems: 'center',
    overflow: "hidden"
  },
  inputs:{
    width: "80%",
    height: "70%",
    
  },
  containerInput:{
    borderBottomWidth: 1,
    borderBottomColor: '#025E64',
    width: "100%",
    height: "20px",
    marginTop: 5,
  },
  input:{
    color: '#5F5959', 
    fontSize: 16,
    marginVertical: -5,
  },
  containerInputPassword:{
    borderBottomWidth: 1,
    borderBottomColor: '#025E64',
    width: "100%",
    height: "20px",
    marginTop: 60,
  },


  buttons:{
    height: "20%",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  voltarButton:{
    width: "100px",
    height: "30px",
    backgroundColor: "#5F5959",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: "20px",
    margin: 5,
  },
  cadastrarButton:{
    width: "100px",
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

  
  

})

export default styles;