import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import Colors from '../constants/ThemeColors';
import Input from '../Components/input';
const Appointments = props =>{

	return (
		
		<View style={{flex:1}}>
			<View style={styles.screenTop}>
			<View style={styles.GreetingsContainer}>
			<Text style={styles.Titletext}>Appointments </Text>
			
			</View>
			</View>

			
			<ScrollView style={styles.ScrollView}> 
			<View style={styles.screenBottom} >

			
			<Input 
				placeholder="Enter Phone Number" 
				label="Phone Number"
			/>
			<Input 
				placeholder="Enter Name" 
				label="Name"
			/>
			<Input 
				placeholder="Enter Email" 
				label="Mobile Number"
			/>
				<Input 
				placeholder="Enter Email" 
				label="Date"
			/>
				<Input 
				placeholder="Enter Email" 
				label="Email"
			/>
			
			</View>
			</ScrollView>
			</View>
			

		);
};

const styles = StyleSheet.create({
	screenTop: {
		
		width:420,
		height:250,
		justifyContent:'center',
		alignItems:'center',

		backgroundColor:Colors.MedBlue,
	},
	ScrollView: {
		flex:2,
		width:'100%',
		backgroundColor:Colors.HomeScreenText
		
	},
	screenBottom:{
		justifyContent:'center',
		alignItems:'center',
		
	},
	text:{
		fontSize:25,
		fontWeight:'bold',
		color:Colors.HomeScreenText
	},
	Titletext:{
		fontSize:35,
		fontWeight:'400',
		color:Colors.HomeScreenText
	},
	GreetingsContainer:{
		marginLeft:0,
	},
});

export default Appointments;