import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableOpacity,
	TouchableWithoutFeedback,
	ImageBackground,
	ScrollView,
	FlatList,
} from "react-native";
import Colors from "../constants/ThemeColors";
import HomeScreenCard from "../Components/HomeScreenCard";
import {PATIENTS} from "../Data/dummyData";

import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";


const HomeScreen = (props) => {
	
	const renderCard = (itemData) => {
	
		return (
			<View style={styles.renderList}>
				
				<HomeScreenCard
					name={itemData.item.name}
					disease={itemData.item.prescription}
				/>

			</View>
		);
	};
	return (
		<View style={styles.screen}>
			<View style={styles.screenTop}>
				<View style={styles.GreetingsContainer}>
					<Text style={styles.Titletext}>Good Morning, </Text>
					<Text style={styles.Titletext}>Rohan</Text>
				</View>

				<View style={styles.ButtonsContainer}>
					<TouchableOpacity
						style={styles.floatingButtons1}
						activeOpacity={0.8}
						onPress={() => {
							props.navigation.navigate("appointments");
						}}
					>
						<MaterialCommunityIcons
							name="account-clock"
							size={45}
							color="white"
						/>
						<View style={{ marginTop: 3 }}>
							<Text style={styles.Buttontext}>Bookings</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.floatingButtons2}
						activeOpacity={0.8}
					>
						<FontAwesome5
							name="briefcase-medical"
							size={38}
							color="white"
						/>
						<View style={{ marginTop: 10 }}>
							<Text style={styles.Buttontext}>Doctor</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.floatingButtons3}
						activeOpacity={0.8}
					>
						<FontAwesome5
							name="money-check"
							size={35}
							color="white"
						/>
						<View style={{ marginTop: 10 }}>
							<Text style={styles.Buttontext}>Fees</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			

			<View style={styles.InfoContainer}>
						<View style={styles.PatientsNumber}>
						<Text style={{fontSize:20, color:'white', fontWeight:'400'}}>Today Patients</Text>
							<FontAwesome5 name="users" size={35} color='white' />
							<Text style={{fontSize:25, color:'white'}}>{PATIENTS.length} </Text>
						</View>
						<View style={styles.TotalCollection}>
						<Text style={{fontSize:18, color:'white', fontWeight:'400'}}>Today Collection</Text>
							<FontAwesome5
							name="money-check"
							size={35}
							color="white"
						/>
							<Text style={{fontSize:20, color:'white'}}>Rs.11,000 </Text>
						</View>
						
				</View>
			

			<View style={styles.ScreenBottom}>
				
				<View style={{flex:1}}>
				<FlatList 
						data={PATIENTS} 
						renderItem={renderCard}  
						ListEmptyComponent={()=>{
							return (
								<View>
								<Text style={{fontSize:20}}>NO ITEMS</Text>
								</View>
								);
						}}
						showsVerticalScrollIndicator={false}
						sty
				/>
				
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		height: "100%",
		width: "100%",
	},
	screenTop: {
		paddingTop: 105,
		
		backgroundColor: Colors.BackgroundBlue,
	},
	ScreenBottom: {
		flex: 2,
		alignItems: "center",

		height: "100%",
		width:'100%',
		backgroundColor: 'white',
	},

	text: {
		fontSize: 25,
		fontWeight: "bold",
		color: Colors.HomeScreenText,
	},
	Titletext: {
		fontSize: 35,
		fontWeight: "300",
		color: Colors.HomeScreenText,
	},
	GreetingsContainer: {
		marginRight: 90,
		marginLeft: 40,
		paddingBottom: 20,
	},
	floatingButtons1: {
		width: 100,
		height: 100,
		justifyContent: "center",

		alignItems: "center",
		borderRadius: 50,

		backgroundColor: Colors.PurpleButton,
	},
	floatingButtons2: {
		width: 100,
		height: 100,
		justifyContent: "center",
		marginLeft: 25,
		alignItems: "center",
		borderRadius: 50,

		backgroundColor: Colors.RedButton,
	},
	floatingButtons3: {
		width: 100,
		height: 100,
		justifyContent: "center",
		marginLeft: 25,
		alignItems: "center",
		borderRadius: 50,

		backgroundColor: Colors.GreenButton,
	},
	Buttontext: {
		fontSize: 12,
		fontWeight: "400",
		color: "white",
	},
	ButtonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",

		marginBottom: 5,
	},
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		alignItems: "center",
	},
	
	listContainer: {
		width: 360,
		alignItems: "center",
		height: '100%',
		backgroundColor:'red'
	},
	renderList: {
		width:370,
		height:120,
		alignItems: "center",
	},
	InfoContainer: {
		width:'100%',
		height:200,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:"center",
		paddingLeft:10,

		backgroundColor:'white'
	},
	PatientsNumber:{
		width:150,
		height:120,
		alignItems: "center",
		borderRadius: 10,
		paddingTop:10,
		backgroundColor:Colors.MedBlue,
		
		justifyContent:'space-around'

	},
	TotalCollection:{
		width:150,
		height:120,
		alignItems: "center",
		borderRadius: 10,
		paddingTop:10,

		backgroundColor:Colors.MedBlue,
		marginLeft:50,
		justifyContent:'space-around'
	},
});

export default HomeScreen;
