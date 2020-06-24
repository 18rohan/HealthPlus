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
	CheckBox
} from "react-native";
import Colors from "../constants/ThemeColors";
import Input from "../Components/input";
import { useDispatch } from "react-redux";
import * as AppointmentActions from "../store/actions/appointmentAction";
import * as PatientActions from '../store/actions/PatientAction';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
// ------------------------------------------------------------------------------------
// Action Creator
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

// ------------------------------------------------------------------------------------
// Creating the Reducer Function
const FormReducer = (state, action) => {
	if (action.type === FORM_INPUT_UPDATE) {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value,
		};
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid,
		};

		let UpdatedformisValid = true;
		for (const key in updatedValidities) {
			UpdatedformisValid = UpdatedformisValid && updatedValidities[key];
		}
		return {
			formValidity: UpdatedformisValid,
			inputValidities: updatedValidities,
			inputValues: updatedValues,
		};
	}
	return state;
};

const PatientProfile = (props) => {
	const dispatch = useDispatch();
	const [error, setError] = useState(false);
	const [toggleMaleCheckBox, setToggleMaleCheckBox] = useState(false);
	const [toggleFeMaleCheckBox, setToggleFeMaleCheckBox] = useState(false);
	// const PatientName = useSelector(state => state.)
	const data = useSelector(state => state.patient);
	console.log("State Snapshot")
	console.log(data)
	const PatientProfileData = useSelector(state => state.auth.email);
	const userId = useSelector(state => state.auth.userId);
	const UserProfile = useSelector(state => state.patient.patients)
	console.log("USER PROFILE")
	console.log(UserProfile)
	// const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id  === prodId));
	// const userId = useSelector(state => state.auth.userId);
	console.log("Patient Profile");
	// console.log(PatientProfileData);
	let gender_data;
	if(toggleMaleCheckBox){
		 gender_data = "male";
	}
	// Initial States of the Form
	const [formState, formStateDispatch] = useReducer(FormReducer, {
		inputValues: {
			name:UserProfile ? UserProfile.name : "",
			email: PatientProfileData,
			contact:UserProfile ? UserProfile.contact : "",
			age: UserProfile ? UserProfile.age : "",
			gender: "male",
			prescription: UserProfile ? UserProfile.prescription :"",
		},
		inputValidities: {
			name: UserProfile ? true : false,
			email:  true,
			contact: UserProfile ? true : false,

			age: UserProfile ? true : false,
			gender:  true,
			prescription: UserProfile ? true : false,
		},
		formValidity: false,
	});

	useEffect(() => {
		if (error) {
			Alert.alert("Something went wrong", error, [{ text: "Okay" }]);
		}
	});

	console.log(formState.inputValues);
	// console.log(name)

	const submitHandler = useCallback(async () => {
		if (!formState.formValidity) {
			// console.log(formState.formValidity);
			Alert.alert("There is some error", "Check your form", [
				{ text: "okay" },
			]);
			return;
		}
		setError(null);
		try {
			await dispatch(
				PatientActions.UpdatePatient(
					userId,
					formState.inputValues.name,	
					PatientProfileData,			
					formState.inputValues.contact,
					formState.inputValues.age,
					formState.inputValues.gender,
					formState.inputValues.prescription,	
					
					
				)
			);
		} catch (err) {
			setError(err.message);
		}
	}, [dispatch, formState]);

	const textChangeHandler = (InputIdentifier, text) => {
		let isValid = false;
		if (text.length > 0) {
			isValid = true;
		}

		formStateDispatch({
			type: FORM_INPUT_UPDATE,
			value: text,
			isValid: isValid,
			input: InputIdentifier,
		});
	};

	return (
		<View style={{ flex: 1, alignItems:'center' }}>
			<View >
			 <LinearGradient
          colors={[Colors.BackgroundBlue, Colors.BackgroundBlue]}
          style={styles.screenTop}>
         
				<View style={styles.GreetingsContainer}>
					<Text style={styles.Titletext}>User Profile </Text>

				</View>
			</LinearGradient>
			</View>

			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
						<View>

							<Input
								placeholder="Enter Name"
								label="Name"
								value={formState.inputValues.name}
								onChange={textChangeHandler.bind(this, "name")}
								// value={name}
								// onChange={text => setName(text) }
							/>
							<Input
								placeholder="Enter email id"
								label="Email Id"
								keyboard="email-address"
								value={PatientProfileData}
								onChange={textChangeHandler.bind(this, "email")}
								editable = {false}
								// value={email}
								// onChange={emailText => setEmail(emailText) }
							/>
							
							<Input
								placeholder="Enter Phone Number"
								label="Phone Number"
								keyboard="phone-pad"
								value={formState.inputValues.contact}
								onChange={textChangeHandler.bind(
									this,
									"contact"
								)}
								// value={contact}
								// onChange={contactText => setContact(contactText)}
							/>
							{!formState.inputValues.contact && (
								<View style={{ marginLeft: 20 }}>
									<Text style={styles.warningText}>
										Enter a valid phone number
									</Text>
								</View>
							)}

							<Input
								placeholder="Enter your age"
								label="Age"
								keyboard="phone-pad"
								value={formState.inputValues.age}
								onChange={textChangeHandler.bind(this, "age")}
								// value={contact}
								// onChange={contactText => setContact(contactText)}
							/>
							{!formState.inputValues.contact && (
								<View style={{ marginLeft: 20 }}>
									<Text style={styles.warningText}>
										Enter your age
									</Text>
								</View>
							)}
							{Platform.OS === 'android' ? 
							(<View style={{flexDirection: 'row'}}>
							<View style={{ marginLeft: 20,marginTop:10, }}>
							<Text style={{fontSize:20,color:Colors.BackgroundBlue, fontWeight:'200'}}>Gender </Text>
							<View style={{height:20,width:50, marginTop:10,flexDirection:'row',paddingTop:5}}>
							<View style={{height:25,width:40,flexDirection:'row',paddingTop:5,paddingLeft:5}}>
							<Text style={{fontSize:15,color:Colors.purpleButton, fontWeight:'200',lineHeight:20}}>Male</Text>
							</View>
							<CheckBox
								disabled={false}
								value={toggleMaleCheckBox}
								onValueChange={() =>
									toggleMaleCheckBox
										? setToggleCheckBox(false)
										: setToggleCheckBox(true)
								}
							/>
							</View>
							</View>
							<View style={{ marginLeft: 20,marginTop:10, }}>
								<Text style={{fontSize:20,color:Colors.BackgroundBlue, fontWeight:'200'}}> </Text>
								<View style={{height:20,width:50, marginTop:10,flexDirection:'row',paddingTop:5}}>
										<View style={{height:25,width:60,flexDirection:'row',paddingTop:5,paddingLeft:5}}>
											<Text style={{fontSize:15,color:Colors.purpleButton, fontWeight:'200',lineHeight:20}}>Female</Text>
										</View>
										<CheckBox
											disabled={false}
											value={toggleFeMaleCheckBox}

											onValueChange={() =>
												toggleMaleCheckBox
													? setToggleFeMaleCheckBox(false)
													: setToggleFeMaleCheckBox(true)
											}
										/>
								</View>
							</View>
							
							</View>) 


							: 



							(
								<View style={{flexDirection: 'row'}}>
							<View style={{ marginLeft: 20,marginTop:10, }}>
							<Text style={{fontSize:20,color:Colors.BackgroundBlue, fontWeight:'200'}}>Gender </Text>
							<View style={{height:20,width:50, marginTop:10,flexDirection:'row',paddingTop:5}}>
							<View style={{height:25,width:40,flexDirection:'row',paddingLeft:5}}>
							<Text style={{fontSize:15,color:Colors.purpleButton, fontWeight:'200',lineHeight:20}}>Male</Text>
							</View>
							<TouchableOpacity style={{height:30}} onPress={()=>{
								if(toggleMaleCheckBox){
									setToggleMaleCheckBox(false);
								}else{
									setToggleMaleCheckBox(true);
								}
							}}>
							{!toggleMaleCheckBox && (<View>
								<MaterialCommunityIcons name="checkbox-blank-outline" size={20} color='black' />
							</View>)}

							{toggleMaleCheckBox && (<View>
								<MaterialCommunityIcons name="checkbox-marked" size={20} color={Colors.BackgroundBlue} />
							</View>)}
							</TouchableOpacity>
							</View>
							</View>
							<View style={{ marginLeft: 20,marginTop:10, }}>
								<Text style={{fontSize:20,color:Colors.BackgroundBlue, fontWeight:'200'}}> </Text>
								<View style={{height:20,width:50, marginTop:10,flexDirection:'row',paddingTop:5}}>
										<View style={{height:25,width:60,flexDirection:'row',paddingLeft:5}}>
											<Text style={{fontSize:15,color:Colors.purpleButton, fontWeight:'200',lineHeight:20}}>Female</Text>
										</View>
										<TouchableOpacity style={{height: 30}} onPress={()=>{
											if(toggleFeMaleCheckBox){
												setToggleFeMaleCheckBox(false)
											}else{
												setToggleFeMaleCheckBox(true)
											}
										}}>
										{!toggleFeMaleCheckBox && (<View> 
											<MaterialCommunityIcons name="checkbox-blank-outline" size={20} color="black" />
											</View>)}
										{toggleFeMaleCheckBox && (<View> 
											<MaterialCommunityIcons name="checkbox-marked" size={20} color={Colors.BackgroundBlue} />
											</View>)}
										</TouchableOpacity>
								</View>
							</View>
							
							</View>)
						}
						
							<Input
								placeholder="Prescription"
								label="Prescription"
								value={formState.inputValues.prescription}
								onChange={textChangeHandler.bind(
									this,
									"prescription"
								)}
								// value={fees}
								// onChange={feesText => setFees(feesText)}
							/>
							{!formState.inputValues.prescription && (
								<View style={{ marginLeft: 20 }}>
									<Text style={styles.warningText}>
										Cannot Leave Empty
									</Text>
								</View>
							)}
						</View>
						<View style={styles.ButtonsContainer}>
							<TouchableOpacity
								style={styles.SubmitButton}
								onPress={submitHandler}
							>
								<Text style={styles.SubmitButtonText}>
									EDIT PROFILE
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	screenTop: {
		justifyContent: "center",

		alignItems: "center",
		width: Platform.OS === "android" ? 450 : 420,
		height: Platform.OS === "android" ? 180 : 180,
		marginTop: Platform.OS === "ios" ? 0 : 0,  
		borderBottomWidth: 0.5,
		borderBottomColor: Colors.BackgroundBlue,
		backgroundColor: Platform.OS === "android" ? Colors.BackgroundBlue : Colors.HomeScreenText,
	},
	ScrollView: {
		flex: 2,
		
		width: "100%",
		backgroundColor: Colors.HomeScreenText,
		marginBottom: 10,
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
		fontSize: Platform.OS === "android" ? 30 : 40,
		fontWeight: "200",
		color: Platform.OS === "android" ? Colors.HomeScreenText : Colors.HomeScreenText,
	},
	GreetingsContainer: {
		justifyContent: "flex-end",
		alignItems: "center",
		height: 40,
	},
	SubmitButton: {
		width: 350,
		height: 60,
		borderRadius:20,
		backgroundColor: Colors.BackgroundBlue,
		justifyContent: "center",
		// alignItems: "center",
		paddingLeft:115,
		marginTop: 30,

	},
	SubmitButtonText: {
		fontSize: 20,
		fontWeight: "200",
		color: Colors.HomeScreenText,
	},
	ButtonsContainer: {
		justifyContent: "center",
		alignItems: "center",
		
	},
	image: {
		resizeMode: "center",
		flex: 1,
		justifyContent: "center",
		width: 260,
		height: 300,
	},
	imageContainer: {
		height: 350,
		width: 290,
		marginRight: 50,
	},
	warningText: {
		color: "green",
	},
	checkboxContainer:{
		marginLeft:10,
	},
});

export default PatientProfile;
