import React, { Component, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	ScrollView,
	Platform,
	TouchableOpacity,
	Image,
	ImageBackground,
} from "react-native";
import Colors from "../constants/ThemeColors";
import Input from "../Components/input";
import { useDispatch, useSelector } from "react-redux";

const ProfileScreen = (props) => {
	return (
		<View style={styles.screenTop}>
			<View style={styles.ButtonsContainer}>
				<View style={styles.TopButtonContainer}>
					<TouchableOpacity
						style={styles.TopButton}
						onPress={() => {
							return props.navigation.navigate({
								routeName: "auth",
								params: {
									userTitle: "doctor",
								},
							});
						}}
					>
					<Image source ={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Male_Doctor_Flat_Icon_Vector.svg/1200px-Male_Doctor_Flat_Icon_Vector.svg.png'}} style={styles.Buttonimage} />
						<Text style={styles.buttonText}> Doctor</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.BottomButtonContainer}>
					<TouchableOpacity
						style={styles.BottomButton}
						onPress={() => {
							props.navigation.navigate("auth");
						}}
					>
					<Image source ={require('../assets/images/patient.png')} style={styles.Buttonimage2} />
						<Text style={styles.buttonText}> Patient</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.ImageContainer}>
				<ImageBackground
					source={require("../assets/images/medicine.png")}
					style={styles.image}
				></ImageBackground>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screenTop: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	ButtonsContainer: {
		flexDirection: "row",
	},

	text: {
		fontSize: 25,
		fontWeight: "bold",
		color: Colors.HomeScreenText,
	},
	TopButton: {
		width: 180,
		height: 250,
		backgroundColor: Colors.MedBlue,
		justifyContent: "space-around",
		alignItems: "center",

		borderRadius: 20,
		shadowColor: Colors.MedBlue,
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.7,
		shadowRadius: 9,
	},
	BottomButton: {
		width: 180,
		height: 250,
		backgroundColor: Colors.MedBlue,
		justifyContent: "center",
		alignItems: "center",

		borderRadius: 20,
		shadowColor: Colors.MedBlue,
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.7,
		shadowRadius: 9,
	},
	buttonText: {
		fontSize: 45,
		fontWeight: "200",
		color: "white",
	},
	image: {
		resizeMode: "contain",
		width: 400,
		height: 350,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	TopButtonContainer: {
		marginLeft: 20,
	},
	BottomButtonContainer: {
		flex: 1,
		// marginTop:50,
		alignItems: "center",
	},
	ImageContainer: {
		width: 400,
		height: 350,
		paddingTop: 160,
		
	},
	Buttonimage: {
		width:120,
		height:150,

	},
	Buttonimage2: {
		width:120,
		height:150,
		marginBottom:25,

	},
});

export default ProfileScreen;
