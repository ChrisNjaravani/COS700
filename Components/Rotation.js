import React, { Component, useState,useEffect, } from 'react';
import * as Permissions from 'expo-permissions';

import{
		StyleSheet,
		View, 
		Platform, 
		Text, 
		PanResponder,
		ScrollView,
		Animated,
		Button,
		Alert ,
		TouchableOpacity,
		AsyncStorage,
		TextInput,
		Modal,
		Icon,
		Seperator,
		Input,
	} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Accelerometer,Gyroscope,DeviceMotion} from 'expo-sensors';
import {Dimensions } from "react-native";

const  Rotation = (props) => {
	
	useEffect(() => {
		_subscribe();
		return () => {
			_unsubscribe(); //Unsubscribe Function
		};
	}, []);
	const _subscribe =()=>{
			DeviceMotion.addListener(devicemotionData => {
			setAlpha(devicemotionData.rotation.alph);
		});
		_setInterval();
	};
	const _setInterval = () => {
		DeviceMotion.setUpdateInterval(1000);
	};
	const _unsubscribe = () => {
		DeviceMotion.removeAllListeners();
	};
	const _handleChange = (e) =>{
		this.props.alphaChange1(e.target.value)
	}
	return (
		<View>
			
			<Input type='text' value={props.alpha} onChange={_handleChange}/>
		</View>
		
	)
};
export default Rotation;