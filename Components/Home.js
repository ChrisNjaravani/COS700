import React, { Component } from 'react'; 
import * as Permissions from 'expo-permissions';//import react in our code.
import {StyleSheet,
		View, 
		
		Text, 
		PanResponder,
		ScrollView,
		Animated,
		Button,
		Alert ,
		TouchableOpacity,
		AsyncStorage,} from 'react-native';//import all the components we are going to use.
import {Dimensions } from "react-native";
import {Accelerometer,Gyroscope,DeviceMotion} from 'expo-sensors';
export default class Home extends Component {
	
  render(){
		return(
			<View style={styles.MainContainer}>
					<View style={styles.childView}>
						<View style={{}}>
							<Text style={{fontWeight:'bold',fontFamily:'sans-serif-condensed',fontSize:17,alignSelf:'center'}}>Consent Form & Subject Information</Text>
						</View >
						<View style={{borderBottomWidth: 1,paddingTop:5}}>
						</View>
						
						<View style={{marginTop:20,marginLeft:20,marginRight:20}}>
							<Text style={{fontWeight:'bold',fontFamily:'sans-serif-condensed',fontSize:16}}>Introduction</Text>
							<Text style={{marginLeft:21}}>
							You are being invited to participate in the data gathering process of this research study.This research will evaluate
							an Android mobile device application prototype.The Below information explains why we need this data, and also who can participate.
							</Text>
							<Text style={{fontWeight:'bold',fontFamily:'sans-serif-condensed',fontSize:16,marginTop:20}}>What is the Purpose of this Research?</Text>
							<Text style={{marginLeft:21}}>
							The main reason of doing this research is to gather data by using an Android application prototype and see if 
							user behavioral characteristics can be used to continously authenticate an Android device user.
							</Text>
							<Text style={{fontWeight:'bold',fontFamily:'sans-serif-condensed',fontSize:16,marginTop:20}}>Who can Participate in this data Gathering Process?</Text>
							<Text style={{marginLeft:21}}>
							{'\u2B24'} Participation is voluntary and anyone who owns an Android mobile device can participate.{"\n"}
							{'\u2B24'} Also Note that information collected by this Android application is only used for this Research study only.
							It is not shared with any third party without your consent.
							</Text>
							
							<Text style={{fontWeight:'bold',fontFamily:'sans-serif-condensed',fontSize:16,marginTop:20}}>If you agree with the Above, please navigate to Profile tab.</Text>
						</View>
					</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
  },
  childView: {
    flex: 1,
    overflow: 'hidden',
  },
});