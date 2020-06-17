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
import CreatePatientProfile from '../Screens/CreatePatientProfile';

import { AntDesign } from '@expo/vector-icons';

// const AuthNavigator = createSwitchNavigator({
// 	// chooseProfileScreen:ProfileScreen,
// 	auth:AuthNavigator,
// 	home:HomeScreen,

// })

const AuthStack = createStackNavigator({
	chooseProfileScreen:ProfileScreen,
	login:AuthScreen,
	signup:SignUpScreen,	
},{
	defaultNavigationOptions:{
		headerStyle:{
			backgroundColor:'blue',
		},
		headerShown:false
	}
})
const HomeStack = createStackNavigator({
	// chooseProfileScreen:ProfileScreen,
	// auth:AuthNavigator,
	// signup:SignUpScreen,
	home:HomeScreen,
	appointments:Appointments,
	appointmentsList:AppointmentsList,
	
	
},{
	defaultNavigationOptions: {
		headerStyle:{
			backgroundColor: 'blue',
		},
		headerShown:false
	},
})


const TabNavigator = createBottomTabNavigator({

	home:{screen: HomeStack,
		navigationOptions:{
			tabBarIcon: (tabInfo) =>{
				return (
					<AntDesign name="home" size={24} color="tomato" />
					);
			}
		}},
	user:{screen:CreatePatientProfile,
		navigationOptions:{
			tabBarIcon: (tabInfo) =>{
				return (
					<AntDesign name="user" size={24} color="tomato" />
					);
			}
		}


}},
{tabBarOptions:{
	activeTintColor:'tomato',

}})

const App = createSwitchNavigator({
	auth:AuthStack,
	home:TabNavigator,
})



export default createAppContainer(App);