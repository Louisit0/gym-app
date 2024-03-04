import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import exData from '../../data/ExcercicesData';

const SwiperDia2 = () => {
  const [ejercicios, setEjercicios] = useState(exData[0].ejercicios);

  return (
    <>
      <Text style={styles.text}>Ejercicios día 2</Text>
      <ScrollView style={styles.scrollView} horizontal>
        {ejercicios.map((ejercicio, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={{
                uri: 'https://www.musculaciontotal.com/wp-content/uploads/2015/09/Sentadillas-con-mancuernas-para-hombres.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>{ejercicio.nombre}</Text>
              <Text style={styles.descriptionText}>Serie de 4</Text>
              <Text style={styles.descriptionText}>
                {ejercicio.repeticiones} repeticiones
              </Text>
              <Button mode="contained" style={styles.button}>
                Completar
              </Button>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '40%', // Set a specific height for the ScrollView
  },
  slide: {
    marginRight: 20, // Add margin to separate each exercise
  },
  image: {
    width: 250, // Set a specific width for the image
    height: 250, // Set a specific height for the image
    borderRadius: 10, // Add border radius to the image
  },
  overlay: {
    marginTop: 10, // Add margin to separate the overlay from the image
  },
  overlayText: {
    fontSize: 16, // Adjust font size for overlay text
    fontWeight: 'bold', // Adjust font weight for overlay text
  },
  descriptionText: {
    fontSize: 14, // Adjust font size for description text
  },
  button: {
    marginTop: 10, // Add margin to separate the button from the text
  },
  text: {
    fontSize: 18, // Adjust font size for the header text
    fontWeight: 'bold', // Adjust font weight for the header text
    marginBottom: 10, // Add margin bottom to the header text
  },
});

export default SwiperDia2;
