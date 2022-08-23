import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';

const InitScreen = ({navigation}) => {

  return(
      <View style={styles.barcontainer}>
      <View style={styles.content}>
      <Text style={styles.text}>Paciente</Text>
      <TouchableNativeFeedback
                      onPress={() => navigation.push('Patient')}>
      <View 
                        style={ styles.fab }>
                        <Text 
                            style={ styles.fabText }>
                        &#8594;
                        </Text>
                    </View>
      </TouchableNativeFeedback>
      <Text style={styles.text}>Profesional</Text>
      <TouchableNativeFeedback
                      onPress={() => navigation.push('Professional')}>
      <View 
                        style={ styles.fab }>
                        <Text 
                            style={ styles.fabText }>
                        &#8594;
                        </Text>
                    </View>
      </TouchableNativeFeedback>
      </View>
      
      </View>
  )
}

const styles = StyleSheet.create({
    barcontainer:{
        backgroundColor: '#602AFD',
        position: 'relative',
        width: 360,
        height: 600,
        top: 400,
    },
    container: {
      backgroundColor: '#FFEECC',
      flex: 1,
      justifyContent: 'center',
      width: 360,
      height: 600,
    },
    text: {
      backgroundColor: '#7964FF',
      fontSize: 35,
      textAlign: 'justify',
      borderRadius: 50,
      marginTop: 20,
      marginBottom: 30,
      paddingLeft: 20,
      width: 300
    }, 
    content: {
      paddingTop: 30
    },
    fab:{
      backgroundColor: 'white',
      width: 50,
      height: 50,
      borderRadius: 100,
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
  },
  fabText:{
      color: '#602AFD',
      fontSize: 35,
      fontWeight: 'bold',
      alignSelf: 'center',
  },
})
export default InitScreen;