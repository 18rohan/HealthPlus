import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/ThemeColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreenCard = (props) => {
	return (
	
		<View style={styles.Card}>
			<View style={styles.cardTop}>
				<Text style={styles.textTop}> {props.name} </Text>
			</View>
	{/* Bottom Section of the Card */}
			<View style={styles.cardBottom}>
			<View style={styles.textContainer}>
				<Text style={styles.textBottom}> {props.time} </Text>
				</View>
				<View style={styles.iconContainer}>
					<MaterialCommunityIcons
						name="dots-vertical"
						size={24}
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
		justifyContent: "center",

		backgroundColor: "white",
	},
	cardTop: {
		flex: 1,
		marginBottom: 5,
		justifyContent: "center",
		alignItems: "flex-start",
		paddingLeft: 10,
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
	textTop: {
		fontSize: 20,
		fontWeight: "200",
		color: Colors.BackgroundBlue,
	},
	textBottom: {
		fontSize: 15,
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
});

export default HomeScreenCard;
