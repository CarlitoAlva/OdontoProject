import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const HelpLinesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <Text style={styles.titleFont}>Líneas de ayuda</Text>
      <View style={styles.textContainer}>
              <Text style={styles.font}>
                    Ofrecen consejería gratuita por vía telefónica
                    por medio de consejeros capacitados para
                    escuchar, animar, apoyar y dar consejos útiles</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.textCircleContainer}>
            <Text style={styles.fontCircle}>
                Línea Vivir sin Tabaco
                * 1111
                </Text>
            </View>
          </View>
          <View style={styles.secondCircleContainer}>
            <View style={styles.secondTextCircleContainer}>
            <Text style={styles.secondFontCircle}>
                  Centro de
                  Orientación
                  Telefónica (COT)
                  01 800 911 2000.
            </Text>
            </View>
          </View>
          <View style={styles.secondTextContainer}>
            <Text style={styles.fontSecond}>
                    Disponible las 24 horas del día,
                    los 365 días del año
            </Text>
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
  circleContainer: {
    borderRadius: 20,
    backgroundColor: '#AAFFF5',
    marginLeft: 27,
    width: 260,
    height: 90,
    bottom: 50,
  },
  secondCircleContainer: {
    borderRadius: 20,
    backgroundColor: '#AAFFF5',
    marginLeft: 27,
    width: 260,
    height: 130,
    top: 10,
  },
  titleFont: {
    bottom: 100,
    left: 35,
    fontSize: 35,
    color: '#0137C1',
    fontWeight: 'bold',
  },
  textContainer: {
      marginLeft:30,
      width: 250,
      bottom: 80,
  },
  textCircleContainer: {
    top:20,
    marginLeft:10,
    width: 250,
  },
  secondTextCircleContainer: {
    top:30,
    marginLeft:5,
    width: 250,
  },
  font: {
      fontSize: 20,
      color: '#0137C1',
      textAlign: 'justify',
  },
  fontCircle: {
    fontSize: 20,
    color: '#0137C1',
    textAlign: 'justify',
    fontWeight: 'bold'
  },
  secondFontCircle: {
    fontSize: 20,
    color: '#0137C1',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  secondTextContainer: {
    marginLeft:30,
      width: 250,
      top: 55,
  },
  fontSecond: {
    fontSize: 20,
    color: '#0137C1',
    textAlign: 'center',
},
});

export default HelpLinesScreen