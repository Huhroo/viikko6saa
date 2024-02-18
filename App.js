import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current weather!</Text>
      <Position/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F0F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 20,
  }
});
