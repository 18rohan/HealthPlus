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
	SafeAreaView,
	Alert,

} from "react-native";
import Colors from "../constants/ThemeColors";
import Input from "../Components/input";
import { useDispatch } from "react-redux";
import * as AppointmentActions from "../store/actions/appointmentAction";
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import * as AuthActions from '../store/actions/AuthActions';
import AsyncStorage from '@react-native-community/async-storage';





const AuthScreen = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [signup, setSignup] = useState(false);
	const dispatch = useDispatch();

	// const storeData = async () =>{
	// 	try{
	// 		await AsyncStorage.setItem()
	// 	}
	// };
	
	const signinHandler = async()=>{
		try{
			await dispatch(AuthActions.Login(email,password));
			props.navigation.navigate('home');

		}catch(err){
			setError(err.message);
		}
	}
	const Usertitle = props.navigation.getParam('userTitle')
	if(error){
		Alert.alert('There was an error',error,[{text:'okay'}]);
	}

	return (
		
		<View style={{ flex: 1, }}>
		
			<View style={styles.screenTop}>
				<View style={styles.GreetingsContainer}>
					<Text style={styles.Titletext}>
					{Usertitle === 'doctor' ? 'Doctor' : 'Patient'}  
					{signup ? ' Sign Up' : ' Sign In'}
					</Text>

				</View>
				<TouchableOpacity style={styles.HomeIconContainer} onPress={()=>{
					props.navigation.navigate('chooseProfileScreen');
				}}>
				<MaterialIcons name="home" size={70} color="white" />
				</TouchableOpacity>
				
			</View>
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
				style={{flex: 1}}
				keyboardVerticalOffset={10}
				>

		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>		
			
			<ScrollView style={styles.screenBottom} >
				<View style={styles.loginForm}>
					<View style={styles.UsernameContainer}>
					<View style={styles.iconContainer}>
						<EvilIcons name="user" size={35} color={Colors.RedButton} />
						</View>
						<Input 
							label="Email" 
							placeholder="Enter email id"
							
							returnKeyType="next"
							value = {email}
							autoCapitalize='none'
							onChange={text =>setEmail(text)}
						/>
					</View>
					<View style={styles.PasswordContainer}>
					<View style={styles.iconContainer}>
						<EvilIcons name="lock" size={35} color={Colors.RedButton} />
						</View>
						<Input 
							label="Password" 
							placeholder="Enter your password"
							secureTextEntry 
							returnKeyType="next"
							value = {password}
							autoCapitalize='none'
							onChange={text =>setPassword(text)}
						/>
					</View>
				
				<TouchableOpacity style={styles.LoginButton} onPress={signinHandler} >
				<Text style={styles.buttonText}>LOGIN</Text>

				</TouchableOpacity>
				<View style={{marginTop:20, flexDirection: 'row'}}>
				<Text style={{color:Colors.RedButton, fontSize:17}}> Don't have an account?</Text>
				<TouchableWithoutFeedback onPress={()=>{
					props.navigation.navigate('signup')
				}}>
				<Text style={{color:Colors.BackgroundBlue, fontSize:17}}> Sign Up</Text>
				</TouchableWithoutFeedback>
				</View>
				</View>
			</ScrollView>
			</TouchableWithoutFeedback>	
		</KeyboardAvoidingView>
			
			
		
		</View>
		
	);
};

const styles = StyleSheet.create({
	screenTop: {
		alignItems: "center",
		justifyContent: "center",
		width: '100%',
		
		height: Platform.OS === "ios" ? 350 : 300,

		backgroundColor:Platform.OS === 'ios' ? Colors.MedBlue : Colors.BackgroundBlue,
	},
	ScrollView: {
		flex: 2,
		width: "100%",
		
		backgroundColor: Colors.homeScreenText,
		marginBottom:10,
	},
	screenBottom: {
		flex: 2,
		backgroundColor: Colors.homeScreenText,
		borderRadius:40,
		// justifyContent: "center",
		// alignItems: "center",
	},
	text: {
		fontSize: 25,
		fontWeight: "bold",
		color: Colors.HomeScreenText,
	},
	Titletext: {
		fontSize: 50,
		fontWeight: "200",
		color: Colors.HomeScreenText,
	},
	GreetingsContainer: {
		justifyContent: "center",
		// alignItems: "center",
		marginLeft:Platform.OS === "ios" ? 70 : 30,
		width:350,
		height:100,
		
	},
	loginForm: {
		width:Platform.OS === "ios" ? 400 : '100%',
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
		
		marginTop:90
	},
	PasswordContainer: {
		flexDirection: "row",
		width:300,
		height:50,

		marginBottom:20,
		// justifyContent: "center",
		alignItems: "center",
		
		marginTop:40,
	},
	LoginButton: {
		width:320,
		height:50,
		backgroundColor:Platform.OS === 'ios' ? Colors.MedBlue : Colors.BackgroundBlue,
		justifyContent: "center",
		// alignItems: "center",
		// marginLeft:120,
		paddingLeft:Platform.OS === "android" ? 120 : 130,
		marginTop:40,
		borderRadius:35,

	},
	buttonText:{
		color:'white',
		fontSize:25,
		fontWeight:'200',
	},
	iconContainer: {
		width:30,
		height:60,
		justifyContent: "flex-end",
	},
	HomeIconContainer:{
		width:80,
		height:80,
		borderColor:'white',
		borderWidth:2,
		borderRadius:40,
		justifyContent: "center",
		alignItems:"center"

	},
	
});

export default AuthScreen;
