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
    height: '30%',
    width: "100%",
  },
  header:{
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 5,
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
    fontWeight: 'bold',
    textAlign: "center",
    padding: 20,
  },
  profileLegend:{
    color: "#FFF",
    fontSize: 20,
    fontWeight: '500',
  },
  



  containerWhite:{
    backgroundColor: '#FFF',
    height: '80%',
    width: "100%",
    borderRadius: 20,
    marginTop: -20,
    alignItems: "center",
    paddingBottom: 10,
  },
 
  textButton:{
    color: "#FFF",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: '500',
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
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton:{
    color: "#025E64",
    fontWeight: '500',
    fontSize: 18,
    textAlign: "left",
  },
  iconContainer:{
    borderRadius: 20, 
    padding: 10, 
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerCalendary: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: "80%",
    height: '90%'
    
  },
  buttonContainerCalendar:{
    backgroundColor: "#025E64",
    width: "80%",
    height: "25%",
    margin: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textButtonContainerCalendar:{
    color: "#FFF"

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
    maxWidth: 100,
    minWidth: 80,
    height: 30,
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
    width: 120,
    height: 40,
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