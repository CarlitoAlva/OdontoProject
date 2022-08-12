import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>Nombre app</Text>
      <View style={styles.buttonContainer}>
      <Button title="Iniciar" color='#FF118B' onPress={() => navigation.navigate('Start')} />
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
    top: 50,
    fontSize: 55,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    width: 300,
    top: 100,
    marginLeft: 30,
},
});

export default HomeScreen