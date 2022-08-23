import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView,Image, Button, } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const LostTeethScreen = () => {
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
        <View style={styles.titleContainer}>
          <Text style={styles.introTitleStyle}>
            {item.title}
          </Text>
        </View>
          <View style={styles.rightCircleContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.font}>{item.text}</Text>
            </View>
          </View>
          <View style={styles.leftCircleContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.font}>{item.subText}<Text style={{fontWeight: 'bold'}}>{item.boldText}</Text></Text>
            </View>
          </View>
        
        {/* <Image
          style={styles.introImageStyle}
          source={item.image} /> */}
      </View>
        ) : 
        item.id === 2 ? (
          <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
          <View style={stylesSecondSlice.rightCircleContainer}>
            <View style={stylesSecondSlice.textContainer}>
              <Text style={stylesSecondSlice.font}>{item.text}</Text>
            </View>
          </View>
          <View style={stylesSecondSlice.leftCircleContainer}>
            <View style={stylesSecondSlice.leftTextContainer}>
              <Text style={stylesSecondSlice.fontLeft}>{item.subText}<Text style={{fontWeight: 'bold'}}>{item.boldText}</Text></Text>
            </View>
          </View>
        
        {/* <Image
          style={styles.introImageStyle}
          source={item.image} /> */}
      </View>
        ) : (
          <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingBottom: 100,
          }}>
            <View style={stylesThirdSlice.rightCircleContainer}>
              <View style={stylesThirdSlice.textContainer}>
                <Text style={stylesThirdSlice.font}>{item.text}</Text>
              </View>
            </View>
          {/* <Image
            style={styles.introImageStyle}
            source={item.image} /> */}
        </View>
        )}
      
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

export default LostTeethScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  introTitleStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  titleContainer: {
    width: 300,
  },
  rightCircleContainer: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 110,
    bottom: 70,
    left: 60,
    borderRadius: 20,
  },
  leftCircleContainer: {
    backgroundColor: '#FFFFFF',
    width: 260,
    height: 100,
    bottom: 60,
    right: 70,
    borderRadius: 20,
  },
  font: {
      fontSize: 15,
      color: '#0137C1',
      textAlign: 'justify',
  },
  textContainer: {
    marginLeft:20,
    width: 200,
    top: 10,
    textAlign: 'justify',
    left: 20,
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
  introTitleStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  titleContainer: {
    width: 300,
  },
  rightCircleContainer: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 110,
    bottom: 70,
    left: 60,
    borderRadius: 20,
  },
  leftCircleContainer: {
    backgroundColor: '#FFFFFF',
    width: 280,
    height: 60,
    bottom: 200,
    right: 60,
    borderRadius: 20,
  },
  font: {
      fontSize: 15,
      color: '#0137C1',
      textAlign: 'justify',
  },
  fontLeft:{
    fontSize: 15,
    color: '#0137C1',
  },
  textContainer: {
    marginLeft:20,
    width: 200,
    top: 10,
    left: 20,
  },
  leftTextContainer: {
    marginLeft:20,
    width: 300,
    top: 10,
    left: 10,
  },
});

const stylesThirdSlice = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  rightCircleContainer: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 110,
    top: 50,
    left: 60,
    borderRadius: 20,
  },
  font: {
      fontSize: 15,
      color: '#0137C1',
      textAlign: 'justify',
  },
  textContainer: {
    marginLeft:20,
    width: 200,
    top: 15,
    left: 20,
  },
});

const slides = [
  {
    id: 1,
    key: 's1',
    text: 'Las células del sistema inmune son menores en cantidad, lo que hace difícil eliminar las bacterias de la boca creadas por restos de alimentos',
    title: 'El cigarro te hace mas propenso a perder dientes, te explico como:',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    subText: 'Sin la ayuda de esas células, las bacterias se reproducen y se pegan al diente y forman el ',
    boldText: 'sarro dental',
    backgroundColor: '#0137C1',
  },
  {
    id: 2,
    key: 's2',
    title: 'Flight Booking',
    text: 'El sarro provoca que la encía se inflame y se desprenda del diente, permitiendo la entrada de bacterias a la raíz, causando perdida de hueso',
    subText: 'Provocando ',
    boldText: 'Enfermedad Periodontal',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#0137C1',
  },
  {
    id: 3,
    key: 's3',
    text: 'La pérdida de hueso dará como resultado que el diente pierda soporte y provoque la pérdida de dientes',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#0137C1',
  },
];