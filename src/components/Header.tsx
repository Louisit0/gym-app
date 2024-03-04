import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Tus ejercicios</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: '8%',
    width: '100%',
    position: 'absolute',
    zIndex: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
