import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../Screens/HomeScreen';
import Appointments from '../Screens/Appointments';
import AppointmentsList from '../Screens/AppointmentList';
import AuthScreen from '../Screens/AuthScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ProfileScreen from '../Screens/chooseProfileScreen';

const AuthNavigator = createSwitchNavigator({
	auth:AuthScreen,
	home:HomeScreen,
})


const MainNavigator = createStackNavigator({
	home:HomeScreen,
	appointments:Appointments,
	appointmentsList:AppointmentsList,
	chooseProfileScreen:ProfileScreen,
	auth:AuthNavigator,
	signup:SignUpScreen
	
},{
	defaultNavigationOptions: {
		headerStyle:{
			backgroundColor: 'blue',
		},
		headerShown:false
	},
})


export default createAppContainer(MainNavigator);