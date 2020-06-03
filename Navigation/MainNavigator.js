import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Appointments from '../Screens/Appointments';

const MainNavigator = createStackNavigator({
	home:HomeScreen,
	appointments:Appointments,
},{
	defaultNavigationOptions: {
		headerStyle:{
			backgroundColor: 'blue',
		},
		headerShown:false
	},
})

export default createAppContainer(MainNavigator);