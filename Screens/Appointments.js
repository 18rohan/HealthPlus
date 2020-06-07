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
	Button
} from "react-native";
import Colors from "../constants/ThemeColors";
import Input from "../Components/input";
import { useDispatch } from "react-redux";
import * as AppointmentActions from "../store/actions/appointmentAction";
import DateTimePicker from '@react-native-community/datetimepicker';



// ------------------------------------------------------------------------------------
// Action Creator
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';


// ------------------------------------------------------------------------------------
// Creating the Reducer Function
const FormReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE ){
        const updatedValues =  {
            ...state.inputValues,
            [action.input] : action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input] : action.isValid,
        };

        let UpdatedformisValid = true;
        for (const key in updatedValidities) {

            UpdatedformisValid = UpdatedformisValid && updatedValidities[key];
        }
        return {
            formValidity:UpdatedformisValid,
            inputValidities:updatedValidities,
            inputValues:updatedValues,
        };
    }
    return state;
};




const Appointments = (props) => {
	const dispatch = useDispatch();
	const [error, setError] = useState(false);
	const [date, setDate] = useState(new Date(1598051730000));
  	const [mode, setMode] = useState('date');
  	const [show, setShow] = useState(false);


  	const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

  };

  	const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  const LatestDate = date.toDateString();
  const LatestTime = date.toLocaleTimeString();


	

	// Initial States of the Form
	const [formState, formStateDispatch] = useReducer(FormReducer, {
		inputValues: {
			Name:'',
			contact:'' ,
			email:'',

			fees:''
		},
		inputValidities: {
			Name: false,
			contact: false,
			email: false,
			
			fees:false
		},
		formValidity: false,
	});

	useEffect(() => {
		if (error) {

			Alert.alert("Something went wrong", error, [
				{ text: "Okay" },
			]);
		}
	});


// console.log(formState.inputValues);
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
				AppointmentActions.CreateAppointment(
					formState.inputValues.Name,
					formState.inputValues.contact,
					formState.inputValues.email,
					LatestDate,
					LatestTime,
					formState.inputValues.fees

				)
			);
		} catch (err) {
			setError(err.message);
		}
	}, [dispatch, formState]);


	const textChangeHandler = (InputIdentifier, text) =>{
        let isValid = false;
        if(text.length > 0){
          isValid = true;
        }

       	formStateDispatch({
            type:FORM_INPUT_UPDATE, 
            value:text, 
            isValid:isValid, 
            input:InputIdentifier, 
                       });
    };

 
 // console.log(LatestDate);
console.log(formState.inputValues);
 
 // console.log(LatestTime);
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.screenTop}>
				<View style={styles.GreetingsContainer}>
					<Text style={styles.Titletext}>Appointments </Text>
				</View>
				<View style={styles.imageContainer}>
					<Image
						source={require("../assets/images/Artboard.png")}
						style={styles.image}
					/>
				</View>
			</View>

			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ScrollView style={styles.ScrollView}>
						<View>
							<Input
								placeholder="Enter Name"
								label="Name"
								 value={formState.inputValues.Name}
								onChange={textChangeHandler.bind(this, 'Name')}
								// value={name}
								// onChange={text => setName(text) }

							/>
							<Input
								placeholder="Enter Phone Number"
								label="Phone Number"
								keyboard="phone-pad"
								value={formState.inputValues.contact}
								onChange={textChangeHandler.bind(this, 'contact')}
								// value={contact}
								// onChange={contactText => setContact(contactText)} 
							/>
							{!formState.inputValues.contact && (
												<View style={{marginLeft:20}}>
													<Text style={styles.warningText}>Enter a valid phone number</Text>
												</View>
												)}
							<Input
								placeholder="Enter email id"
								label="Email"
								value={formState.inputValues.email}
								onChange={textChangeHandler.bind(this, 'email')}
								// value={formState.inputValues.email}
								// onChange={emailText => setEmail(emailText) }
								
							/>
							{!formState.inputValues.email && (
												<View style={{marginLeft:20}}>
													<Text style={styles.warningText}>Enter a valid Email Id</Text>
												</View>
												)}


							


							
							<View style={styles.DateTimePicker}>
								<TouchableOpacity onPress={showDatepicker} style={styles.DatePicker}>
									<Text style={styles.label}>Date</Text>
								</TouchableOpacity>					
							
								<TouchableOpacity onPress={showTimepicker} style={styles.DatePicker}>
									<Text style={styles.label}>Time</Text>
								</TouchableOpacity>
							</View>
							
							<View style={styles.Container}>
								<View style={styles.DateTimeInfoContainer}>
									<Text>{LatestDate}</Text>
								</View>
								<View style={styles.DateTimeInfoContainer}>
									<Text> {LatestTime}</Text>
								</View>
							</View>
							{show && (
								<View>
								<Button title="done" onPress={()=>{
									
									setShow(false)}} />
      						  <DateTimePicker
      						    testID="dateTimePicker"
      						    value={date}
      						    mode={mode}
      						    is24Hour={true}
      						    display="default"
      						    onChange={onChange}

      						  />
      						  </View>
      						)}
						
							<Input
								placeholder="Enter Fees"
								label="Fees"
								value={formState.inputValues.fees}
								onChange={textChangeHandler.bind(this, 'fees')}
								// value={fees}
								// onChange={feesText => setFees(feesText)}
							/>
							{!formState.inputValues.fees && (
												<View style={{marginLeft:20}}>
													<Text style={styles.warningText}>Cannot Leave Empty</Text>
												</View>
												)}

						</View>
						 
						 

						<View style={styles.ButtonsContainer}>
							<TouchableOpacity
								style={styles.SubmitButton}
								onPress={submitHandler}
							>
								<Text style={styles.SubmitButtonText}>
									
									Create Appointment
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
		flexDirection: "row",

		width: 420,
		height: 250,

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
		fontSize: 30,
		fontWeight: "300",
		color: Colors.HomeScreenText,
	},
	GreetingsContainer: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 12,
	},
	SubmitButton: {
		width: 250,
		height: 60,
		backgroundColor: Colors.BackgroundBlue,
		justifyContent: "center",
		alignItems: "center",
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
		color:'green'
	},
	DatePicker:{
		width:150,
		height:40,
		marginRight:20,
		backgroundColor:'blue',
		marginLeft:20,
		marginTop:20,
		justifyContent: "center",
		alignItems:"center"


	},
	label: {
			fontSize:20,
			fontWeight:'400',
			color:'white'
		},

	DateTimePicker:{
			flexDirection: "row",
			alignItems:"stretch",
			marginLeft:20,
			marginTop:15,


		},
	DateTimeInfoContainer:{
		width:120,
		height:60,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:'white',
		borderColor:Colors.MedBlue,
		borderWidth:0.5,
		marginLeft:30,
		marginTop:25,
	},
	Container: {
		flexDirection:'row',
		alignItems:'center',
		marginLeft:50,
	},
});

export default Appointments;
