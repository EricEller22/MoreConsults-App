import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  logo:{
    width: '70px',
    height: '70px', 
  },
  
  containerBlue:{
    backgroundColor: '#43B4BB',
    height: '20%',
    width: "100%",
  },
  header:{
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "#FFF"
  },
  containerLegend:{
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  legend:{
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
    padding: 20,
  },
  profileLegend:{
    color: "#FFF",
    fontSize: 20,
    fontWeight: 500,
  },




  containerWhite:{
    backgroundColor: '#FFF',
    height: '80%',
    width: "100%",
    borderRadius: 20,
    marginTop: -20,
    alignItems: "center",
    justifyContent: "center",
  },

  containerLegendTwo:{
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonContainer:{
    width: "100%",
  },
  backButton:{
    color: "#025E64",
    fontWeight: 500,
    fontSize: 15,
    margin: 12,
    textAlign: "left"
  },
  containerData:{
    width: "100%",
    height: "50%",
    flexDirection: "row",  
  },
  dataTwo:{
    textAlign: "left",
    padding: 5,
    width: "50%",
  },
  textTwo:{
    marginVertical: 5,
    fontSize: 15,
    color: "#025E64",
    fontWeight: 600,
  },
  dataOne:{
    alignItems: "flex-end",
    padding: 5,
    width: "50%",
  },
  textOne:{
    marginVertical: 5,
    fontSize: 15,
    fontWeight: 600,
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
  confirmarButton:{
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