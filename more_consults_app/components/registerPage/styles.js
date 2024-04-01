import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#43B4BB',
    height: '100%',
    width: '100%',
    flex: 1,
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
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
  },


  containerInputs:{
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: "90%",
    height: "70%",
    alignItems: 'center',
    overflow: "hidden"
  },
  inputs:{
    width: "90%",
    height: "70%",
    
  },
  containerInput:{
    borderBottomWidth: 1,
    borderBottomColor: '#025E64',
    width: "100%",
    height: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  input:{
    color: '#5F5959', 
    fontSize: 20,
    marginVertical: -5,
  },
  containerInputPassword:{
    borderBottomWidth: 1,
    borderBottomColor: '#025E64',
    width: "100%",
    height: 20,
    marginTop: 60,
    marginBottom: 5,
  },


  buttons:{
    height: "20%",
    flexDirection: "row",

    alignItems: 'flex-end'
  },
  voltarButton:{
    width: 100,
    height: 35,
    backgroundColor: "#5F5959",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 20,
    margin: 5,
  },
  cadastrarButton:{
    width: 100,
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

  
  

})

export default styles;