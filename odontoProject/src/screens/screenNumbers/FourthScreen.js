import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const FourthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleFont}>Existen diferentes alternativas</Text>
            <View style={styles.row}>
                <View style={styles.circleContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.font}>
                            Miembro del equipo 1
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="" color="#0137C1" onPress={() => navigation.navigate('HelpLines')} />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.circleContainer}>
                    <View style={styles.leftButtonContainer}>
                        <Button title="" color="#0137C1" onPress={() => navigation.navigate('HelpLines')} />
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.font}>
                            Líneas de ayuda en México
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.circleContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.font}>
                            App Móviles
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="" color="#0137C1" onPress={() => navigation.navigate('HelpLines')} />
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
    titleFont: {
      top: 50,
      fontSize: 35,
      color: '#0137C1',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    circleContainer: {
        backgroundColor: '#00C2CB',
        borderRadius: 55,
        marginLeft: 20,
        width: 320,
        height: 85,
        top: 150,
    },
    textContainer: {
        marginLeft:45,
        width: 250,
        top: 25,
    },
    rightTextContainer: {
        marginLeft:75,
        width: 250,
        bottom: 5,
    },
    buttonContainer: {
        marginLeft:245,
        width: 50,
        top: 1,
    },
    leftButtonContainer: {
        marginLeft:15,
        width: 50,
        top: 25,
    },
    font: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'justify',
        fontWeight: 'bold',
    },
    row: {
        marginBottom: 50,
    },
  });

export default FourthScreen