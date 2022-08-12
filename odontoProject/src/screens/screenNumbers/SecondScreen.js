import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.subcontainer}>
    <Text style={styles.titleFont}>  Si...
    </Text>
    <View style={styles.textContainer}>
      <Text style={styles.font}>El cigarro disminuye el flujo de la sangre lo
      cuál provoca una cicatrización mas lenta
      que puede llegar a comprometer la
      curación de los tejidos que rodean al
      diente/implante, pudiendo llevar al fracaso
      del tratamiento:</Text>
    </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      backgroundColor: '#0137C1',
      height: 1000,
      borderColor: '#FFFFFF',
  },
  subcontainer:{
      backgroundColor: '#FFFFFF',
      top: 25,
      left: 25,
      right: 25,
      width: 312,
      height: 670,
      justifyContent: 'center',
      borderRadius: 30,
  },
  titleFont: {
    bottom: 190,
    left: 25,
    fontSize: 45,
    color: '#0137C1',
    fontWeight: 'bold',
  },
  textContainer: {
      marginLeft:33,
      width: 250,
      bottom: 170,
  },
  font: {
      fontSize: 20,
      color: '#0137C1',
      textAlign: 'justify',
  },
});

export default SecondScreen