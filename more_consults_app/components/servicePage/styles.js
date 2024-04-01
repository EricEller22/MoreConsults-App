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
    height: '35%',
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
    height: '75%',
    width: "100%",
    borderRadius: 20,
    marginTop: -20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons:{
    flex: 1,
  },
  button:{
    width: 300,
    height: 70,
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
    fontWeight: 'bold',
    textAlign: "center",
  },
  containerLegendTwo:{
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
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




})

export default styles;