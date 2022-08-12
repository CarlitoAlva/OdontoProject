import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const PigmentationsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleFont}>  Pigmentaciones en...
        </Text>
        <View style={styles.row}>
        <View style={styles.circleContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.font}>  
                Manchas de color café claro a obscuro
                en la encía, paladar, labio y/o lengua, a
                las cuales se les conoce como
                "<Text style={styles.fontWeight}>melanosis del fumador</Text>".
        </Text>
        </View>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.circleContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.font}>  
                Los dientes, placas e incluso prótesis
                dentales pueden teñirse de color
                amarillo o café.
        </Text>
        </View>
        </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      backgroundColor: '#0137C1',
      height: 1000,
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
    height: 280,
    top: 50,
    left: 30,
    borderRadius: 20,

  },
  font: {
      fontSize: 20,
      color: '#0137C1',
  },
  fontWeight:{
    fontWeight: 'bold',
  },
  textContainer: {
    marginLeft:20,
    width: 250,
    top: 15
  },
  row: {
      marginBottom: 50
  },
});
export default PigmentationsScreen