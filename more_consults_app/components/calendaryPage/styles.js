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
    height: '15%',
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
    height: "50%",
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
    height: '65%',
    width: "100%",
    borderRadius: 20,
    marginTop: -20,

  },
  button:{
    width: 250,
    height: 60,
    backgroundColor: "#025E64",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  textButton:{
    color: "#FFF",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: 500,
    textAlign: "center",
  },
  containerLegendTwo:{
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    textAlign: "left"
  },
  backButtonContainer:{
    width: "100%",
  },
  backButton:{
    color: "#025E64",
    fontWeight: 500,
    fontSize: 18,
    margin: 10,
    textAlign: "left"
  },
  containerCalendary: {
    marginHorizontal: 20,
    borderRadius: 10,
  },
  listHours:{
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  itemContainer: {
    flexDirection: "row",
    margin: 3,
    maxWidth: 80,
    minWidth: 70,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  availableItem: {
    backgroundColor: '#43B4BB',
    
  },
  unavailableItem: {
    backgroundColor: '#D9D9D9',
  },

  buttons:{
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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