import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const BadBreathScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>También llamado "aliento del fumador"...
        </Text>
      <View style={styles.circleContainer}>
      <View style={styles.textContainer}>
      <Text style={styles.font}>  
                El cigarro disminuye la cantidad de
                saliva en boca, haciendo que los restos
                de comida se queden alojados en los
                dientes y lengua, lo que provoca mal
                aliento.
        </Text>
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      backgroundColor: '#00C2CB',
      height: 1000,
  },
  subcontainer:{
      backgroundColor: '#0137C1',
      top: 25,
      left: 25,
      right: 25,
      width: 312,
      height: 670,
      justifyContent: 'center',
      borderRadius: 30,
  },
  titleFont: {
    top: 20,
    left: 30,
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  circleContainer: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 570,
    top: 50,
    left: 30,
    borderRadius: 20,
  },
  font: {
      fontSize: 17,
      color: '#0137C1',
  },
  textContainer: {
    marginLeft:20,
    width: 270,
    top: 15
  },
});

export default BadBreathScreen