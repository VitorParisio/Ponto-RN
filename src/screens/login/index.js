import React, {useState} from 'react'
import { 
	View, 
	KeyboardAvoidingView, 
	TextInput, 
	TouchableOpacity, 
	Text,
	StyleSheet, 
	Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Login(props){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const login = async ()=>{

		let res = await fetch("http://10.0.0.101:8000/api/login", {
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Accept':'application/json'
			},
			body: JSON.stringify({
				'email':email,
				'password':password
			})
		})

		let json = await res.json();
		
		if(json.token){
		   await AsyncStorage.setItem('userData',JSON.stringify(json));
			props.navigation.navigate("Content")
		}else{
			alert('Erro de login e/ senha!')
		}
		
	}

	return(
		<KeyboardAvoidingView style={style.container}>
			<View style={style.logo}>
				<Image source={require('../../assets/logo.jpg')} />
			</View>

			<View style={style.content}>
				<TextInput placeholder="Email:" autoCorrect={false} style={style.input} onChangeText={(text)=>{setEmail(text)}} />
				<TextInput placeholder="Senha" secureTextEntry={true} autoCorrect={false} style={style.input} onChangeText={(text)=>{setPassword(text)}} />
				<TouchableOpacity style={style.btnSubmit} onPress={login}>
					<Text style={style.submitText}>Entrar</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

const style = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'lightgray'
	},
	
	h1:{
		fontSize:20,
		bottom:30,
	},

	logo:{
		flex:1,
		justifyContent:'center'
	},

	content:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		width:'90%'
	},

	input:{
		width:'90%',
		marginBottom:15,
		backgroundColor:'#FFF',
		height:40,
		padding:10,
		borderRadius:7
	},
	btnSubmit:{
		backgroundColor:'darkgray',
		width:'90%',
		height:40,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:7
	},

	submitText:{

	}
})