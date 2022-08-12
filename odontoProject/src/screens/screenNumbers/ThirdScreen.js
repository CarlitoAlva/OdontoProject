import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleFont}>LOS BENEFICIOS SERÁN...
    </Text>
        <View style={styles.subcontainer}>
            <View style={styles.row}>
                <View style={styles.circleContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.font}>
                            Las pigmentaciones de la encía, paladar,
                            lengua y/o labio desaparecerán poco a
                            poco 
                        </Text>
                    </View>
                </View> 
            </View>
            <View style={styles.row}>
                <View style={styles.circleContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.font}>
                            Se reduce el riesgo de padecer
                            Periodontitis, lo cuál disminuye la
                            probabilidad de perder dientes    
                        </Text> 
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.thirdCircleContainer}>
                    <View style={styles.thirdTextContainer}>
                        <Text style={styles.font}>
                            El flujo de la sangre se normaliza
                            permitiendo una mejor cicatrización, por lo
                            que hay más éxito en el tratamiento dental
                        </Text>   
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fourthCircleContainer}>
                    <View style={styles.fourthTextContainer}>
                        <Text style={styles.font}>
                            Las células de defensa se multiplican de
                            manera normal para eliminar bacterias, lo
                            que evitara la presencia rápida de
                            enfermedades
                        </Text>
                    </View>
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
    subcontainer:{
        backgroundColor: '#C8D9E6',
        top: 50,
        left: 25,
        right: 25,
        width: 312,
        height: 565,
        justifyContent: 'center',
        borderRadius: 30,
    },
    titleFont: {
        top: 30,
        left: 35,
        fontSize: 40,
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
    circleContainer: {
        backgroundColor: '#00C2CB',
        borderRadius: 25,
        marginLeft: 20,
        width: 270,
        height: 105,
        top: 10,
    },
    textContainer: {
        marginLeft:16,
        width: 240,
        top: 13
    },
    font: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'justify',
    },
    row: {
        marginBottom: 20,
    },
    thirdCircleContainer: {
        backgroundColor: '#00C2CB',
        borderRadius: 25,
        marginLeft: 20,
        width: 270,
        height: 130,
        top: 5,
    },
    thirdTextContainer: {
        marginLeft:16,
        width: 240,
        top: 13
    },
    fourthCircleContainer: {
        backgroundColor: '#00C2CB',
        borderRadius: 25,
        marginLeft: 20,
        width: 270,
        height: 130,
        top: 5,
    },
    fourthTextContainer: {
        marginLeft:16,
        width: 240,
        top: 13
    },
});

export default ThirdScreen