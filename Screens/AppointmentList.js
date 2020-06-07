import React, { Component, useState} from 'react';
import { StyleSheet, 
		 View, 
		 Text, 
		 FlatList, 
		 ScrollView,
		 Platform, 
		 KeyboardAvoidingView, 
		 Keyboard, 
		 TouchableWithoutFeedback,
		 TouchableOpacity,
		 Image,
		 ImageBackground
		} 
from 'react-native';
import Colors from '../constants/ThemeColors';
import Input from '../Components/input';
import {useDispatch, useSelector } from 'react-redux';
import * as AppointmentActions from '../store/actions/appointmentAction';
import {APPOINTMENTS} from '../Data/dummyData';
import AppointmentListCard from '../Components/AppointmentListCard';


const renderSingleAppointment = itemData => {
	console.log(itemData);
    				return (
			<View style={styles.renderList}>
				
				<AppointmentListCard
					name={itemData.item.Name}
					time={itemData.item.time}
				/>

			</View>
		);
	};
    	

const AppointmentsList = props =>{
	const dispatch = useDispatch();
	const availableAppointments = useSelector(state => state.appointment.appointments);
	console.log("AppointMent list");
	console.log(availableAppointments);
	if (availableAppointments.length === 0) {
		return (
					<View style={{flex:1}}>
						<View style={styles.screenTop}>
							<View style={styles.GreetingsContainer}>
								<Text style={styles.Titletext}>Appointments </Text>
							</View>
							<View style={styles.imageContainer}>
								<Image source ={require('../assets/images/Artboard.png')} style={styles.image} />	
							</View>

						</View>
						<View style={styles.screenBottom}>
							<Text style={styles.AlertText}> No Appointments yet!</Text>
						</View>
					</View>
			);
	}

	return (
			<View style={{flex:1}}>
			<View style={styles.screenTop}>
				
				<View style={styles.GreetingsContainer}>
					<Text style={styles.Titletext}>Appointments </Text>
				</View>
				<View style={styles.imageContainer}>
					<Image source ={require('../assets/images/Artboard.png')} style={styles.image} />	
				</View>

			</View>
			<View style={styles.screenBottom}>
				<FlatList 
						data={availableAppointments} 
						renderItem={renderSingleAppointment}
						showsVerticalScrollIndicator={false}
				/>
			</View>
		

			
			
			
		</View>
		 
    			);
    	};
	
			
			
			

	
const styles = StyleSheet.create({
	screenTop: {
		
		flexDirection:'row',
		
		width:420,
		height:310,
		

		backgroundColor:Colors.MedBlue,
	},
	ScrollView: {
		flex:2,
		width:'100%',
		backgroundColor:Colors.HomeScreenText
		
	},
	screenBottom:{
		flex:2,
		justifyContent:'center',
		alignItems:'center',
		paddingTop:20,
		
	},
	text:{
		fontSize:25,
		fontWeight:'bold',
		color:Colors.HomeScreenText
	},
	Titletext:{
		fontSize:30,
		fontWeight:'300',
		color:Colors.HomeScreenText,
		

	},
	GreetingsContainer:{
		justifyContent:'center',
		alignItems:'center',
		paddingLeft:12,
		height:290
		
	},
	SubmitButton:{
		width:250,
		height:60,
		backgroundColor:Colors.BackgroundBlue,
		justifyContent:'center',
		alignItems:'center',
		marginTop:30,


	},
	SubmitButtonText: {
		fontSize:20,
		fontWeight:'200',
		color:Colors.HomeScreenText
	},
	ButtonsContainer: {
		justifyContent:'center',
		alignItems:'center'
	},
	image:{
		resizeMode:'center',
		flex:1,
		justifyContent:'center',
		width:260,
		height:300,

	},
	imageContainer: {
		height:350,
		width:300,
		marginRight:50,
	},
	renderList: {
		width:370,
		height:120,
		alignItems: "center",
	},
	AlertText:{
		fontSize:28,
		color:Colors.MedBlue,
		fontWeight:'bold',
	},
});

export default AppointmentsList;










