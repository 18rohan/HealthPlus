import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ClinicNavigator from './Navigation/MainNavigator';

export default function App() {
  return (

    <View style={styles.screen}>
    <ClinicNavigator />
    
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
});
