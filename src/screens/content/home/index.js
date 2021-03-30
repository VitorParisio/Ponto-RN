import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Home(){

	const [users, setUsers] = useState([]);

	useEffect(()=>{
		getUser();
	},[])
	
	async function getUser(){
		let response = await AsyncStorage.getItem('userData')
		let json = JSON.parse(response)
		setUsers(json.name)
		
	}

	return(

		<View>
			<Text>{users}</Text>
		</View>
	);
}

