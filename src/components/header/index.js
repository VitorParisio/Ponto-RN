import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Header(){

	return(
		<View style={style.header}>
			<Text>Header</Text>
		</View>
	);
}

const style = StyleSheet.create({
	header:{
		flex:1,
		borderWidth:20,
		backgroundColor:'#FFF'

	},
	name:{

	}
})