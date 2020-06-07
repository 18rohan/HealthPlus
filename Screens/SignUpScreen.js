import React, {
	Component,
	useState,
	useReducer,
	useCallback,
	useEffect,
} from "react";
import {
	StyleSheet,
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
	TextInput,
	ImageBackground,
	
	Alert,
} from "react-native";
import Colors from "../constants/ThemeColors";
import Input from "../Components/input";
import { useDispatch } from "react-redux";
import * as AppointmentActions from "../store/actions/appointmentAction";
import { EvilIcons } from '@expo/vector-icons';





const SignUpScreen = (props) => {


	const Usertitle = props.navigation.getParam('userTitle')


	return (

				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<View style={{ flex: 1, }}>
			<View style={styles.screenTop}>
				<View style={styles.GreetingsContainer}>
					<Text style={styles.Titletext}>
					Sign Up
					</Text>

				</View>
				
			</View>

			<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
				style={{flex: 1}}
				keyboardVerticalOffset={100}
				>
			<View >
				<View style={styles.loginForm}>
				<View style={styles.UsernameContainer}>
					<View style={styles.iconContainer}>
						<EvilIcons name="user" size={35} color={Colors.RedButton} />
						</View>
						<Input 
							label="Username" 
							placeholder="Enter username"
							returnKeyType="next"
						/>
					</View>


					<View style={styles.UsernameContainer}>
					<View style={styles.iconContainer}>
						<EvilIcons name="user" size={35} color={Colors.RedButton} />
						</View>
						<Input 
							label="Phone Number" 
							placeholder="Enter username"
							returnKeyType="next"
						/>
					</View>
					<View style={styles.PasswordContainer}>
						<View style={styles.iconContainer}>
						<EvilIcons name="lock" size={38} color={Colors.RedButton} />
						</View>
						<Input 
							label="Password" 
							placeholder="Enter password"
							secureTextEntry
							selectTextOnFocus
						/>
				</View>
				<TouchableOpacity style={styles.LoginButton} >
				<Text style={styles.buttonText}>SIGN UP</Text>

				</TouchableOpacity>
				<View style={{marginTop:20, flexDirection: 'row'}}>
				<Text style={{color:Colors.RedButton, fontSize:17}}>Already have an Account?</Text>
				<TouchableWithoutFeedback onPress={()=>{
					props.navigation.navigate('auth');
				}}>
				<Text style={{color:Colors.BackgroundBlue, fontSize:17}}> Sign In</Text>
				</TouchableWithoutFeedback>
				</View>
				</View>
			</View>
			</KeyboardAvoidingView>
			
		</View>
		</TouchableWithoutFeedback>
			
	);
};

const styles = StyleSheet.create({
	screenTop: {
		alignItems: "center",
		justifyContent: "center",
		width: 420,
		height: 350,

		backgroundColor: Colors.MedBlue,
	},
	ScrollView: {
		flex: 2,
		width: "100%",
		backgroundColor: Colors.HomeScreenText,
		marginBottom:10,
	},
	screenBottom: {
		flex: 2,

		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 25,
		fontWeight: "bold",
		color: Colors.HomeScreenText,
	},
	Titletext: {
		fontSize: 50,
		fontWeight: "100",
		color: Colors.HomeScreenText,
	},
	GreetingsContainer: {
		justifyContent: "center",
		alignItems: "center",
		width:350,
		height:150,
		
	},
	loginForm: {
		width:400,
		height:400,
		alignItems: "center",
		justifyContent: "center"
	},
	UsernameContainer: {
		flexDirection: "row",
		width:300,
		height:50,
		marginBottom:20,
		// justifyContent: "center",
		alignItems: "center",
		
		marginTop:30
	},
	PasswordContainer: {
		flexDirection: "row",
		width:300,
		height:50,
		marginBottom:20,
		// justifyContent: "center",
		alignItems: "center",
		
		marginTop:30,
	},
	LoginButton: {
		width:320,
		height:50,
		backgroundColor:Colors.MedBlue,
		justifyContent: "center",
		alignItems: "center",
		// marginLeft:120,
		marginTop:40,
		borderRadius:35,

	},
	buttonText:{
		color:'white',
		fontSize:25,
		fontWeight:'200',
	},
	iconContainer: {
		width:40,
		height:60,
		justifyContent: "flex-end",
	},
	
});

export default SignUpScreen;
