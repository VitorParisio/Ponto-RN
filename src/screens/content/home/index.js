import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Header from '../../../components/header'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home(){
	let time = "";
	let date = "";

	useEffect(()=>{
		getInput();
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

	const getInput = async()=>{
		let response = await AsyncStorage.getItem('userData');
		let json = JSON.parse(response);
		
		let userId = json.id;
		let hourUser = json.login;
		let status = "Normal";

		let d = new Date();
	    let h = addZero(d.getHours());
	    let m = addZero(d.getMinutes());
	    let s = addZero(d.getSeconds());
	    time = h + ":" + m + ":" + s;

		if(hourUser < time){
			status = "Atrasado!";
		}

		await fetch("http://10.0.0.109:8000/api/input", {
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Accept':'application/json'
			},
			body: JSON.stringify({
				'user_id':userId,
				'status' : status,
				'input' : time,
				'date' : getDateCurrent

			})
		})
	}
	function getTest(){
		alert("test")
	}
	return(
		<View>
			<Header />
		</View>
	);
}

const style = StyleSheet.create({

	btnSubmit:{
		backgroundColor:'darkgray',
		width:'90%',
		height:40,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:7
	},

})