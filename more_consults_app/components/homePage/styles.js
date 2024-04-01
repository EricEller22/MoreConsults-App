import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: '#43B4BB',
  },
  containerImage: {
    justifyContent: "flex-start",
    alignItems: 'center',
    width: "100%",
    height: "20%"
  },
  
  logo:{
    width: 300,
    height: 50
  },
  
  containerBlue:{
    backgroundColor: '#43B4BB',
    height: '35%',
    width: '100%',
  },
  containerLegend:{
    height: "60%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileLegend:{
    color: "#FFF",
    fontSize: 20,
    fontWeight: '500',
  },
  legend:{
    justifyContent: "center",
    alignItems:"center"
  },
  profileIcon:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
  agendButton:{
    width: "80%",
    height: 80,
    padding: 10,
    backgroundColor: "#025E64",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20
  },
  textAgendButton:{
    color: "#FFF",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: 'bold',
    textAlign: "center",
  },
  moreButtons:{
    flex: 1,
    margin: 40,
  },
  moreButton:{
    width: 130,
    height: 140,
    backgroundColor: "#025E64",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
  },
  textmoreButton:{
    color: "#FFF",
    fontSize: 15,
    fontWeight: '500',
    textAlign: "center",
  },
  lineButton:{
    flexDirection: 'row'
  },
  iconContainer: {
    margin: 5,
    
  },

})

export default styles;