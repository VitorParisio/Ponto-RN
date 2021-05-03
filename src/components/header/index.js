import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header(){
	const [users, setUsers] = useState("");
	let time = "";
	let date = "";
	
	useEffect(()=>{
		getUser();
	},[])

	function addZero(i) {
	  if (i < 10) {
	    i = "0" + i;
	  }
	  return i;
	}

	const getDate = () => {
	  let d = new Date();
	  let day = d.getDate();
	  let month = d.getMonth() + 1;
	  let year = d.getFullYear();
	  date = year + "-" + month + "-" + day;
	 
	  return date;  
	}

	const getDateCurrent = getDate();

	async function getUser(){
		let response = await AsyncStorage.getItem('userData');
		let json = JSON.parse(response);
		setUsers(json.name);
	}

	async function getOutput(){
		let response = await AsyncStorage.getItem('userData');
		let json = JSON.parse(response);

		let userId = json.id;
		let hourUser = json.logout;
		let status = "Normal";

		let d = new Date();
	    let h = addZero(d.getHours());
	    let m = addZero(d.getMinutes());
	    let s = addZero(d.getSeconds());
	    time = h + ":" + m + ":" + s;

		if(hourUser > time){
			status = "Largou cedo!";
		}

		await fetch("http://10.0.0.109:8000/api/output", {
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Accept':'application/json'
			},
			body: JSON.stringify({
				'user_id':userId,
				'status' : status,
				'output' : time,
				'date' : getDateCurrent

			})
		})

	}

	return(
		<View style={style.container}>
			<View>
				<Text style={style.title}>{`Olá, ${users}!`}</Text>
			</View>
			<View>
				<TouchableOpacity style={style.btnSubmit} onPress={getOutput}>
					<Text style={style.title}>Sair</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container:{
		flex:1,
		padding:24,
		backgroundColor:"#000",
		flexDirection:"row",
		justifyContent : 'space-between',
	},
	title:{
		color:"#FFF",
	},

	btnSubmit:{
		backgroundColor:'darkgray',
		width:'70%',
		height:40,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:7
	},
})