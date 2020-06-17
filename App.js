import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ClinicNavigator from './Navigation/MainNavigator';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import AppointmentReducer from './store/reducers/appointmentReducer';
import AuthReducer from './store/reducers/AuthReducer';
import ReduxThunk from 'redux-thunk';



const rootReducer = combineReducers({
  appointment:AppointmentReducer,
  auth:AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk)); 
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.screen}>
    <ClinicNavigator />
    
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
});
