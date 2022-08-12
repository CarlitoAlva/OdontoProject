import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const DentalImplantFailSreen = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  const RenderItem = ({item}) => {
    return (
      <>
      {
        item.id == 1 ? (
          <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
          <View style={styles.topCircleContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.font}>{item.text}</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.fontText}>{item.subText}<Text style={{fontWeight: 'bold'}}>{item.boldText}</Text></Text>
            </View>
          </View>
        
        {/* <Image
          style={styles.introImageStyle}
          source={item.image} /> */}
      </View>
        ) : 
        (
          <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
          <View style={stylesSecondSlice.topContainer}>
            <View style={stylesSecondSlice.textContainer}>
              <Text style={stylesSecondSlice.font}>{item.text}</Text>
            </View>
          </View>
          <View style={stylesSecondSlice.bottomContainer}>
            <View style={stylesSecondSlice.firstTextContainer}>
              <Text style={stylesSecondSlice.fontText}>{item.firstText}</Text>
            </View>
            <View style={stylesSecondSlice.secondTextContainer}>
              <Text style={stylesSecondSlice.fontText}>{item.secondText}<Text style={{fontWeight: 'bold'}}>{item.boldText}</Text></Text>
            </View>
            <View style={stylesSecondSlice.thirdTextContainer}>
              <Text style={stylesSecondSlice.fontText}>{item.thirdText}</Text>
            </View>
          </View>
        
        {/* <Image
          style={styles.introImageStyle}
          source={item.image} /> */}
      </View>
        )
        }
      </>
    );
  };

  return (
    <>
      {(
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showDoneButton={false}
          showSkipButton={false}
          showNextButton={false}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default DentalImplantFailSreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  topCircleContainer: {
    backgroundColor: '#0137C1',
    width: 310,
    height: 150,
    bottom: 30,
    borderRadius: 20,
  },
  bottomContainer: {
    width: 260,
    top: 150,
    height: 200,
    right: 25,
  },
  font: {
      fontSize: 25,
      color: '#FFFFFF',
      textAlign: 'justify',
      fontWeight: 'bold',
  },
  fontText:{
    fontSize: 20,
    color: '#0137C1',
    textAlign: 'justify',
  },
  textContainer: {
    marginLeft:20,
    width: 270,
    top: 20,
    textAlign: 'justify',
  },
});

const stylesSecondSlice = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  topContainer: {
    width: 310,
    height: 150,
    bottom: 30,
  },
  bottomContainer: {
    backgroundColor: '#0137C1',
    width: 330,
    top: 130,
    height: 300,
    borderRadius: 20,
  },
  font: {
      fontSize: 25,
      color: '#0137C1',
      textAlign: 'justify',
      fontWeight: 'bold',
  },
  fontText:{
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'justify',
  },
  textContainer: {
    marginLeft:20,
    width: 270,
    top: 20,
    textAlign: 'justify',
  },
  firstTextContainer: {
    marginLeft:100,
    width: 210,
    top: 20,
    textAlign: 'justify',
  },
  secondTextContainer: {
    marginLeft:20,
    width: 210,
    top: 50,
    textAlign: 'justify',
  },
  thirdTextContainer: {
    marginLeft:100,
    width: 210,
    top: 80,
    textAlign: 'justify',
  },
});

const slides = [
  {
    id: 1,
    key: 's1',
    text: 'Los implantes reemplazan los dientes perdidos',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    subText: 'Sin embargo pueden sufrir complicaciones a corto o largo plazo si no se cuidan de una manera correcta, esto implica una buena higiene y evitar el consumo del cigarro...',
    backgroundColor: '#FFFFFF',
  },
  {
    id: 2,
    key: 's2',
    text: 'El cigarro puede causar "Periimplantitis"',
    firstText: 'Células de defensa disminuyen en número por como consecuencia del cigarro',
    secondText: 'Permitiendo que las bacterias se reproduzcan y se peguen al implante, formando ',
    boldText: 'sarro dental',
    thirdText: 'Provocando que el hueso que rodea al implante se vaya perdiendo, quitandole soporte y estabilidad al implante dental',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#FFFFFF',
  },
];