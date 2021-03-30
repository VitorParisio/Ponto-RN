import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './home';
import Profile from './profile';
import Task from './task';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default function Content(){

	return(
		<Tab.Navigator>
	      <Tab.Screen name="Home" component={Home} options={{
	      	tabBarIcon:()=>(<Icon name='home' size={26} color="#FFF" />)
	      }} />
	       <Tab.Screen name="Profile" component={Profile} options={{
	       	tabBarLabel:'Minha conta',
	      	tabBarIcon:()=>(<Icon name='user' size={26} color="#FFF" />)
	      }} />
	       <Tab.Screen name="Task" component={Task} options={{
	       	tabBarLabel:'Atividades',
	      	tabBarIcon:()=>(<Icon name='tasks' size={26} color="#FFF" />)
	      }} />
	    </Tab.Navigator>
	    
	);
}
