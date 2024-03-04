import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import SwiperDia1 from './Swiper/SwiperDia1';
import SwiperDia2 from './Swiper/SwiperDia2';
import SwiperDia3 from './Swiper/SwiperDia3';
import Spacer from './Spacer';
import {Button} from 'react-native-paper';

const Main = () => {
  return (
    // <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <ScrollView>
      <View style={styles.main}>
        <SwiperDia1 />
        <Spacer />
        <SwiperDia2 />
        <Spacer />
        <SwiperDia3 />
      </View>
    </ScrollView>
    // </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 20,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  scrollViewContent: {
    flexGrow: 54,
    justifyContent: 'center',
  },
});
