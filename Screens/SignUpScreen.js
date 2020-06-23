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
import * as AuthActions from '../store/actions/AuthActions';
import * as PatientActions from '../store/actions/PatientAction';

import { EvilIcons } from '@expo/vector-icons';





const SignUpScreen = (props) => {
	
	const [name, setName] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [signup, setSignup] = useState(false);
	
	const signupHandler = async()=>{
		try{
			await dispatch(AuthActions.SignUp(email,password));
			await dispatch(PatientActions.CreatePatient(name,email,contact))
			props.navigation.navigate('auth');
		}catch(err){
			setError(err.message);
		}
	}


	const dispatch = useDispatch();
	const Usertitle = props.navigation.getParam('userTitle')
	if (error){
		Alert.alert('Error in Form',error,[{text:'okay'}]);
	}

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
				keyboardVerticalOffset={0}
				>
				
			<View >
			
				<View style={styles.loginForm}>
				
				<View style={styles.UsernameContainer}>
					<View style={styles.iconContainer}>
						<EvilIcons name="user" size={35} color={Colors.RedButton} />
						</View>
						<Input 
							label="Name" 
							placeholder="Enter your name"
							returnKeyType="next"
							value ={name}
							onChange={text =>setName(text)}
						/>
					</View>


					<View style={styles.UsernameContainer}>
					<View style={styles.iconContainer}>
						<EvilIcons name="user" size={35} color={Colors.RedButton} />
						</View>
						<Input 
							label="Phone Number" 
							placeholder="Enter Phone Number"
							returnKeyType="next"
							value={contact}
							keyboard = 'phone-pad'
							onChange={text =>setContact(text)}
						/>
					</View>
					
					<View style={styles.UsernameContainer}>
					<View style={styles.iconContainer}>
						<EvilIcons name="user" size={35} color={Colors.RedButton} />
						</View>
						<Input 
							label="Email" 
							placeholder="Enter Email id"
							returnKeyType="next"
							value={email}
							keyboard='email-address'
							onChange={text =>setEmail(text)}
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
							value={password}
							onChange={text => setPassword(text)}
							selectTextOnFocus
						/>
				</View>
				<TouchableOpacity style={styles.LoginButton} onPress={signupHandler} >
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
		justifyContent: "flex-end",
		width: 380,
		height: 150,
		marginLeft:17,
		borderBottomWidth:0.5,
		borderColor: Colors.BackgroundBlue
		// backgroundColor: Colors.MedBlue,
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
		color: Colors.BackgroundBlue,
	},
	GreetingsContainer: {
		justifyContent: "center",
		alignItems: "center",
		width:350,
		height:100,
		
	},
	loginForm: {
		width:400,
		height:500,
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
