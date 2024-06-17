import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: '#43B4BB',
  },
  logo:{
    width: 70,
    height: 70, 
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
  title:{
    textTransform: "uppercase",
    color: "#025E64",
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  legend:{
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 20
  },
  profileLegend:{
    color: "#FFF",
    fontSize: 20,
    fontWeight: '500',
  },

  containerWhite:{
    backgroundColor: '#FFF',
    height: '90%',
    width: "100%",
    borderRadius: 20,
    marginTop: -20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  containerLegendTwo:{
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  dataOne:{
    alignItems: "flex-end",
    padding: 5,
    width: "50%",
  },
  textOne:{
    marginVertical: 5,
    fontSize: 15,
    fontWeight: '600',
  },

  buttons:{
    height: "20%",
    justifyContent:"flex-end",
    alignItems: "flex-end",
  },
  buttonTwo:{
    margin: 20,
    
  },
  confirmarButton:{
    width: 120,
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