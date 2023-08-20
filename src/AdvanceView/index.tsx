import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native'; // Use TouchableOpacity for custom styling
import Constants from 'expo-constants';

export default function Advance({ navigation }) {
  return (
    <View
      style={{
        ...styles.container,
        ...{ backgroundColor: '#ff9191' },
      }}
    >
      <Text style={styles.header}>Advance</Text>
      <Text style={styles.subHeader}>A Simple Method to Balance Focus with Deliberate Breaks</Text>
      <Image style={styles.image} source={require('../../assets/pomodoro.png')} />
      <View style={styles.buttonContainer}>
        <Button title='Simple' color='#94e1b4' />
        <Button title='Advance' color='#0000ff' />
      </View>
      <TouchableOpacity style={[styles.back, { top: Constants.statusBarHeight + 10, right: 20 }]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeButton}>Return home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d95550',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 14,
    marginTop: 5,
  },
  image: {
    height: 250,
    width: 250,
  },
  buttonContainer: {
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  back: {
    position: 'absolute',
  },
  homeButton: {
    color: '#94e1b4',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
