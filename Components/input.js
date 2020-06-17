import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import Colors from '../constants/ThemeColors';

const Input = props =>{

	return (
		<View style={styles.InputContainer}>
		<View style={styles.labelContainer}>
			<Text style={styles.label}>{props.label}</Text>
		</View>
		
		<View style={styles.TextInputContainer}>
			<TextInput
				{...props}
				 placeholder={props.placeholder}
				 
				 onChangeText={props.onChange}
				 autoCapitalize={props.autoCapitalize}
				 blurOnSubmit={true}
				 keyboardType={props.keyboard}

			/>
		</View>
		</View>
		);
};

const styles = StyleSheet.create({
		labelContainer: {
			width:'90%',
			paddingTop:20,
			marginTop:10,
			justifyContent: "center",
			// alignItems:'flex-start',
			paddingLeft:20,
		
		},
		label: {
			fontSize:20,
			fontWeight:'200',
			color:Colors.BackgroundBlue
		},
		TextInputContainer:{
			justifyContent:'center',
			marginLeft:20,
			alignItems:'flex-start',
			width:'90%',
			height:40,
			
			
			borderBottomColor:Colors.RedButton,
			borderBottomWidth:0.5,
			
		},
		InputContainer:{
			flex:1,
			width:400,
			
			

		},
});

export default Input;