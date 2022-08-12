import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback, Button } from 'react-native';
const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
            <View style={styles.row}>
                <View style={styles.questionContainer}>
                    <Text style={styles.font}>¿Cómo el cigarro afecta mi boca?</Text>
                </View>
                <View style={styles.buttonOptionContainer}>
                <Button style={styles.buttonOption} color="#00C2CB" title="1" onPress={() => navigation.navigate('1')} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.questionContainer}>
                    <Text style={styles.font}>¿Fumar afecta mi tratamiento dental?</Text>
                </View>
                <View style={styles.buttonOptionContainer}>
                <Button style={styles.buttonOption} color="#00C2CB" title="2" onPress={() => navigation.navigate('2')} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.questionContainer}>
                    <Text style={styles.font}>¿Qué beneficios tendré al dejar de fumar?</Text>
                </View>
                <View style={styles.buttonOptionContainer}>
                <Button style={styles.buttonOption} color="#00C2CB" title="3" onPress={() => navigation.navigate('3')} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.questionContainer}>
                    <Text style={styles.font}>Quiero dejar de fumar, ¿Qué puedo hacer?</Text>
                </View>
                <View style={styles.buttonOptionContainer}>
                <Button style={styles.buttonOption} color="#00C2CB" title="4"  onPress={() => navigation.navigate('4')} />
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
        backgroundColor: '#FFFFFF',
        top: 25,
        left: 25,
        right: 25,
        width: 312,
        height: 670,
        justifyContent: 'center',
        borderRadius: 30,
    },
    questionContainer: {
        marginLeft:20,
        width: 200,
        top: 10
    },
    font: {
        fontSize: 25,
        color: '#0137C1',
        fontWeight: 'bold',
    },
    buttonOptionContainer: {
        bottom: 20,
        left: 230,
        width: 50,
    },
    row: {
        marginBottom: 40
    },
});
export default StartScreen