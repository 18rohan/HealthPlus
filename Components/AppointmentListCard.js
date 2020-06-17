import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/ThemeColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppointmentListCard = (props) => {
	return (
	
		<View style={styles.Card}>
			<View style={styles.cardTop}>
				<View style={styles.nameContainer}>
				<Text style={styles.textTopName}> {props.name} </Text>
				</View>
				<View style={styles.TimeContainer}>
				<Text style={styles.textTopTime}> {props.time} </Text>
				</View>
			</View>
	{/* Bottom Section of the Card */}
			<View style={styles.cardBottom}>
			<View style={styles.textContainer}>
				<Text style={styles.textBottom}>Prescription </Text>
				</View>
				<View style={styles.iconContainer}>
					<MaterialCommunityIcons
						name="dots-vertical"
						size={21}
						color="black"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Card: {
		height: 100,
		width: 330,
		borderColor: "lightgrey",
		borderWidth: 0.5,
		borderRadius: 10,
		justifyContent: "space-around",

		backgroundColor: "white",
	},
	cardTop: {
		flex: 2,
		flexDirection:'row',
		marginBottom: 5,
		justifyContent: "center",
		alignItems: "flex-start",
		
	},
	cardBottom: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		borderRadius: 10,

		marginLeft: 1,
		alignItems:'center',
		justifyContent: "center",
		backgroundColor: "#f3f4f7",
	},
	textTopName: {
		fontSize: 20,
		fontWeight: "200",
		color: Colors.BackgroundBlue,
	},
	textTopTime: {
		fontSize: 15,
		fontWeight: "200",
		color: 'red',
	},
	textBottom: {
		fontSize: 18,
		fontWeight: "200",
		color: "black",
	},
	iconContainer: {
		width:200,
		alignItems: "flex-end",
	},
	textContainer: {
		alignItems: "flex-start",
		width:100,
	},
	nameContainer: {
		width:'70%',
		alignItems:'flex-start',
		justifyContent: "center",
		height:60,
		paddingLeft:20,
	},
	TimeContainer:{
		width:'30%',
		alignItems:'center',
		height:60,
		justifyContent: "center",
	},
});

export default AppointmentListCard;
