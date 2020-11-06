import React, { Component, useState,useEffect } from 'react';
import * as Permissions from 'expo-permissions';
//import react in our code.
import {StyleSheet,
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
		} from 'react-native';
import {Accelerometer,Gyroscope,DeviceMotion} from 'expo-sensors';

export default function Average(){
	const [name, setName] = useState("chris");
	const [highestX, sethX] = useState(0);
	const [highestY, sethY] = useState(0);
	const [lowestY, setlY] = useState(0);
	const [lowestX, setlX] = useState(0);
	const [avX, setavX] = useState(0);
	const [avY, setavY] = useState(0);
	
	//const [name, setName] = useState("chris");
	useEffect(() => {
		_getData();
	}, []);
	const _getData = async() =>{
		try{
			let tester = await AsyncStorage.getItem('calton');
			let parser = JSON.parse(tester);
			//alert(parser.lowestY);
			sethX(parser.highestX);
			sethY(parser.highestY);
			setlX(parser.lowestX);
			setlY(parser.lowestY);
			setavX(parser.avgX);
			setavY(parser.avgY);
		}
		catch(error){
			alert(error);
			throw error;
		}
	}
	return(
		<View style={styles.MainContainer}>
			<Text style={{alignSelf:'center',justifyContent: 'center',}}>Average Values</Text>
			<View
				style={{
						borderBottomColor: 'black',
							borderBottomWidth: 1,
							paddingTop:5
					}}
			/>
			<Text style={{alignSelf:'center',justifyContent: 'center',}}>Highest Y: {" "} {highestY}</Text>
			<Text style={{alignSelf:'center',justifyContent: 'center',}}>Lowest Y: {" "} {lowestY}</Text>
			<Text style={{alignSelf:'center',justifyContent: 'center',}}>Highest X: {" "} {highestX}</Text>
			<Text style={{alignSelf:'center',justifyContent: 'center',}}>Lowest X: {" "} {lowestX}</Text>
			
	
			<Text style={{alignSelf:'center',justifyContent: 'center',}}>Average Y: {" "} {avY}</Text>
			<Text style={{alignSelf:'center',justifyContent: 'center',}}>Average X: {" "} {avX}</Text>
			
		</View>
	)

}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
  },
  childView: {
    flex: 1,
    overflow: 'hidden',
	marginTop: 5,
  },
});