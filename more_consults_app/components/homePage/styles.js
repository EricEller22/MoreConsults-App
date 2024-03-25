import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  logo:{
    width: '300px',
    height: '100px', 
  },
  
  containerBlue:{
    backgroundColor: '#43B4BB',
    height: '35%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  containerLegend:{
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: 500,
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
    fontWeight: 500,
    textAlign: "center",
  },
  lineButton:{
    flexDirection: 'row'
  },


})

export default styles;