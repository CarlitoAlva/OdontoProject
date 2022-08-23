import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
          <Text style={styles.titleFont}>El cigarro puede causar:</Text>
      </View>
      <View style={styles.row}>
          <View style={styles.circleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.font}>Pigmentaciones</Text>
            <Text style={styles.subFont}>Dientes y boca</Text>
          </View>
          <View style={styles.buttonOptionContainer}>
            <Button title="1.1" color="#00C2CB" onPress={() => navigation.navigate('Pigmentations')} />
          </View>
          </View>
      </View>
      <View style={styles.row}>
          <View style={styles.circleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.font}>Mal aliento</Text>
          </View>
          <View style={styles.buttonOptionContainer}>
            <Button title="1.2" color="#00C2CB" onPress={() => navigation.navigate('BadBreath')} />
          </View>
          </View>
      </View>
      <View style={styles.row}>
          <View style={styles.circleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.font}>Perdida prematura de dientes</Text>
          </View>
          <View style={styles.buttonOptionContainer}>
            <Button title="1.3" color="#00C2CB" onPress={() => navigation.navigate('LostTeeth')} />
          </View>
          </View>
      </View>
      <View style={styles.row}>
          <View style={styles.circleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.font}>Fracaso de implantes dentales</Text>
          </View>
          <View style={styles.buttonOptionContainer}>
            <Button title="1.4" color="#00C2CB" onPress={() => navigation.navigate('FailureTeeth')} />
          </View>
          </View>
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
      backgroundColor: '#FFFFFF',
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
    bottom: 300,
    left: 30,
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  circleContainer: {
    backgroundColor: '#C8D9E6',
    width: 260,
    height: 120,
    bottom: 550,
    left: 50,
    borderRadius: 20,

  },
  font: {
      fontSize: 25,
      color: '#0137C1',
      fontWeight: 'bold',
  },
  textContainer: {
    marginLeft:20,
    width: 200,
    top: 10
  },
  subFont: {
    fontSize: 17,
    color: '#0137C1',
    fontWeight: 'bold',
  },
  buttonOptionContainer: {
      top: 20,
      left: 200,
      width: 50,
  },
  row: {
      marginBottom: 20
  },
});

export default FirstScreen