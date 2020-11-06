import React, { Component } from 'react';
//import react in our code.
import {StyleSheet, View, Platform, Text, PanResponder,ScrollView,Animated,Button,Alert ,TouchableOpacity} from 'react-native';
import {DeviceMotion} from 'expo-sensors';

//import all the components we are going to use.
//import { accelerometer } from "react-native-sensors";

export default class Profile extends Component {
	constructor(){
		super();
		this.state ={
			angle: null,
		};
	}
	componentDidMount(){
		DeviceMotion.addListener(rotation => {
			//const alpha = Math.abs(rotation.alpha);
			alert("chris");
			//this.setState({angle: rotation});
			
			//alert(JSON.stringify(rotation))
		});
	}
	componentWillUnMount(){
		DeviceMotion.removeAllListeners();
	}
  
	// accelerometer.subscribe(({ x, y, z, timestamp }) =>
		// console.log({ x, y, z, timestamp })
	// );
	render(){
		return (
			<Text> hhh</Text>	
		);
	}
  
}

