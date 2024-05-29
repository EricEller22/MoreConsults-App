import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: '#43B4BB',
  },

  containerBlue:{
    backgroundColor: '#43B4BB',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '10%',
    width: '100%',
  },
  title:{
    color: '#FFF',
    fontSize: 20,
  },
  icon:{
    padding: 2
  },


  containerWhite:{
    backgroundColor: '#FFF',
    height: '90%',
    width: "100%",
    borderRadius: 20,
    padding: 10,
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
    margin: 20,
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