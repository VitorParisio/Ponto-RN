import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Login(props){
	return(
		<View style={style.container}>
			<Text style={style.h1}>Saymon é muito feio!</Text>
			<Button style={style.btn} color="red" title={"Escanear novamente"} onPress={() => {props.navigation.navigate("Scanner")}}/>
		</View>
	)
}

const style = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	
	h1:{
		fontSize:20,
		bottom:30,
	},
})