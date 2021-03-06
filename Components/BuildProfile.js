import React, { Component, useState,useEffect, } from 'react';
import * as Permissions from 'expo-permissions';
/* sending emails */
import * as MailComposer from 'expo-mail-composer';


//import react in our code.
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
		Divider,
	} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Accelerometer,Gyroscope,DeviceMotion} from 'expo-sensors';
import {Dimensions } from "react-native";
import Rotation from './Rotation';
import Quotes from './Quotes';

const  BuildProfile = (props) => {
// *** TILT  angle variables **//
	const [userName,setUserName] =useState(props.name);
	const [alpha, setAlpha] = useState(0);
	const [arrAlpha, setarrAlpha] = useState([]);
	const [stringAlpha, setStringAlpha] = useState(' ');
	
// ** X & Y Coordinate variables **//
	const [locationX,setLocationX] =useState(0);
	const [locationY,setLocationY] =useState(0);
	const [rData, setrData] = useState(0);
	const [change, setChange] = useState(0);
	const [offset, setOffset] = useState(0);
	const [color, setColor] = useState("red");
	const [screenWidth,setScreenWidth] = useState(0);
	const [tempVar,setTempVar] =useState(0);
	const [arrXR, setarrXR] = useState([]);
	const [arrYR, setarrYR] = useState([]);
	const [i, setI] = useState(0);
	const [averageX,setAverageX] =useState(0);
	const [averageY,setAverageY] =useState(0);
	const [hX, setHx] = useState('');
	const [lX, setLx] = useState(0);
	const [hY, setHy] = useState('');
	const [lY, setLy] = useState(0);
	
	const [sTemp, setTemp] = useState(0);
	const [stopTemp, setStopTemp] = useState(0);
	
// ** Time Interval **//
	const [startTouchTime, setStartTouchTime] = useState(0);
	const [endTouchTime, setEndTouchTime] = useState(0);
	const [timeInterval, setTimeInterval] = useState(0);
	
	const [arrStartTime, setarrStartTime] = useState([]);
	const [arrEndTime, setarrEndTime] = useState([]);
	const [arrTimeInterval, setarrTimeInterval] = useState([]);
	
	const [stringT,setStringT] = useState(' ');

// ** side of the scrolling **//
	const [tSide, setTSide] = useState(' ');
	const [side, setSide] = useState(' ');
	const [arrSide, setArrSide] = useState([]);
	const [stringS, setStringSide] = useState(' ');
	
// ** successful email send **//
	const [emailSend, setEmailSend] = useState(true);
	const [showProf, setShowProfile] = useState(false);
	const [showWhat, setShowWhat] = useState(false);
	
// --------useEffect --------------
	useEffect(() => {
		_getScreenSize();
		_subscribe();
		return () => {
			_unsubscribe(); //Unsubscribe Function
		};
	}, []);
	
// ************************************************************ TILT ANGLE ***************************** //	
// ************************************************** END TILT ************************************************

// ************************************************** X & Y Coordinate ************************************************
	const _getScreenSize = () =>{
		const screenWidth = Math.round(Dimensions.get('window').width);
			setScreenWidth(screenWidth);
	}
	const onTouchStart = (evt) =>{
		setTemp(evt.timeStamp);
		setTempVar(evt.nativeEvent.pageX.toFixed(2));
		if(change){
			setStartTouchTime(sTemp);// start time
			setEndTouchTime(stopTemp); // end time
			setLocationX(evt.nativeEvent.pageX.toFixed(2));// x coordinate value
			setLocationY(evt.nativeEvent.pageY.toFixed(2)); // y coordinate value
			setI(i + 1);
			// arrays for x & y coordinates 
			setarrXR(arrXR => arrXR.concat(parseFloat(locationX)));
			setarrYR(arrYR => arrYR.concat(parseFloat(locationY)));
			// arrays for time intervals
			setarrStartTime(arrStartTime => arrStartTime.concat(parseFloat(startTouchTime)));
			setarrEndTime(arrEndTime => arrEndTime.concat(parseFloat(endTouchTime)));
			var timeInt = (endTouchTime - startTouchTime); // time interval 
			setTimeInterval(timeInt);
			if(timeInt > 0){
				setarrTimeInterval(arrTimeInterval => arrTimeInterval.concat(timeInterval));
			}
			// arrays for scrolling side
			setSide(tSide);
			setArrSide(arrSide => arrSide.concat((side.toString())));
			// now getting the z-angle
			setarrAlpha(arrAlpha => arrAlpha.concat(alpha));
			if(i > 5){
			{/* getting average of X values */}
				
				// var sumX =0;
				// var sumY =0;
				// var stringX ='';	
				// var stringY ='';
				// for(var z = 5; z < arrXR.length; z++){
					// sumX += arrXR[z];
					// if(stringX == ''){stringX += arrXR[z].toString();}
					// else{stringX += stringX + " , " + arrXR[z].toString();}
					
				// }
				// setHx(stringX);
				// for(var z = 5; z < arrYR.length; z++){
					// sumY += arrYR[z];
					// if(stringY == ''){stringY +=  arrYR[z].toString();}
					// else {stringY += stringY + " , " + arrYR[z].toString();}					
				// }
				// setHy(stringY);
			/* time intervals **/
				// var stringTimeInterval = '';
				// for(var z = 5; z < arrTimeInterval.length; z++){
					// if(stringTimeInterval ==''){stringTimeInterval += arrTimeInterval[z].toString();}
					// else{stringTimeInterval += stringTimeInterval + " , " + arrTimeInterval[z].toString();}					
				// }
				// setStringT(stringTimeInterval);
			/* tilt angle **/
				
				
			/* side **/
				// var side2 = '';
				// for(var z = 5; z < arrSide.length; z++){
					// if(side2 == ''){side2 +=  arrSide[z].toString();}
					// else {side2 += side2 + " , " + arrSide[z].toString();}					
				// }
				// setStringSide(side2);
				
				
				// setAverageX(sumX/arrXR.length.toFixed(2));
				// setAverageY(sumY/arrYR.length.toFixed(2));			
			}
			
		};	
	};
	const saveData = async () =>{
	};
	const _onTouchMove = (evt) =>{
		
		setStopTemp(evt.timeStamp);
		setChange(false);
		
	};
	const _onTouchEnd = (evt) =>{
		
		setStopTemp(evt.timeStamp);
		
	};
	const _scrollMe = (evt) =>{
		
		setChange(true);
		//check side of scrolling - left users + right users
		var halfWidth = screenWidth/2;
		var s_hand = 0;
		
		s_hand = parseFloat(tempVar);
		if(s_hand > halfWidth){
			{/* this is right scrolling */}
			setTSide("right");
		}
		else{
			setTSide("left");
		}
		//check scrolling 
		
		var currentOffset = evt.nativeEvent.contentOffset.y;
		var direction = currentOffset > offset ? 'up' : 'down';
		setOffset(currentOffset);
		
	};
	
	const  submitNow = (e) =>{
		setHx(arrXR.slice(5).toString());
		setHy(arrYR.slice(5).toString());
		setStringSide(arrSide.slice(5).toString());
		setStringT(arrTimeInterval.slice(5).toString());
		setStringAlpha(arrAlpha.slice(5).toString());
		
		var stringValues = "Coordinates -> X : " + arrXR.slice(5).toString() + " Y: " + arrYR.slice(5).toString()
			+ " Time Intervals -> " + arrTimeInterval.slice(5).toString() + " Side -> " + arrSide.slice(5).toString() + 
			" z-angle -> " + arrAlpha.slice(5).toString() + " name -> " + userName;
			let result = MailComposer.composeAsync({
				recipients:['christophernjaravani@gmail.com'],
				subject:"Testing Data",
				body:stringValues,
			})
			setEmailSend(false);
			setShowWhat(true);
		
	};
	
	
	// working on the angle
	const _subscribe =()=>{
		
			DeviceMotion.addListener(devicemotionData => {
				
				setAlpha(parseFloat(devicemotionData.rotation.alpha));
				
			});
		_setInterval();
	};
	const _setInterval = () => {
		
		DeviceMotion.setUpdateInterval(1000);
		
	};
	const _unsubscribe = () => {
		
		DeviceMotion.removeAllListeners();
		
	};
	
// loading profile //
	const _LoadProfile = () =>{
		
		setShowProfile(true);
		setShowWhat(false);
		setHx(arrXR.slice(5).toString());
		setHy(arrYR.slice(5).toString());
		setStringSide(arrSide.slice(5).toString());
		setStringT(arrTimeInterval.slice(5).toString());
		
	}
// ************************************************** End x and y coordinate ************************************************
	if(!props.name) return null;
	else if(emailSend)
		return (
			<View style={styles.MainContainer}>
				<View style={{backgroundColor:'darkgray'}}>
						<Text style={{alignSelf:'center',justifyContent: 'center',color:'white',fontWeight:'bold',paddingTop:10}}>
							X: {locationX} {" "},
							Y: {locationY} {" "},
							
						</Text>
						<Text style={{alignSelf:'center',justifyContent: 'center',color:'white',fontWeight:'bold'}}>
							Time Interval: {timeInterval} {" Side: "} {tSide}
						</Text>
						<Text style={{alignSelf:'center',justifyContent: 'center',color:'white',fontWeight:'bold',paddingBottom:10}}>
							Z-Angle : {" "} {alpha} 
						</Text>
						
						
				</View>
					
			<View  style={styles.childView}>
            {/*Text to show the screen location we get*/}
                <ScrollView
                    onTouchStart={(evt) => onTouchStart(evt)}
					onScroll={(evt) => _scrollMe(evt)}
					onTouchMove={(evt) => _onTouchMove(evt)}
					onTouchEnd={(evt) => _onTouchEnd(evt)}
                >
                    <View style={{}}>
						<View style={{paddingTop:60}}>
							<View>
								<Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold',color:'black',fontFamily:'sans-serif-condensed'}}>Famous quotes on Success, Life & Love </Text>
								<Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold',color:'black',fontFamily:'sans-serif-condensed'}}>Feel free to Read & Scroll down </Text>
							</View>
							<View style={{borderBottomWidth:1,borderColor:'white'}}>
								<Text style={{fontWeight:'bold',alignSelf:'center',fontFamily:'sans-serif-condensed',fontSize:16,marginTop:20}}>Disclaimer</Text>
								<Text style={{marginLeft:21,fontSize:14,color:'tomato',borderTopWidth: 1,marginRight:21}}>
									The Quotes provided below by us on our Android Mobile application is for general informational purposes only.All informational
									quotes below is provided in good faith,however make no representation or warranty of any kind, express or implied, regarding accuracy, adequacy, validity, reliability, availability or completeness of any information on our
									Android mobile application.
							</Text>
							</View>
							
							<View>
								
								<Quotes/>
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
									<TouchableOpacity onPress={
											() => submitNow()
										}
										style={{justifyContent: 'center',alignSelf:'center',backgroundColor:'tomato',width:'80%',height:40,borderWidth:5,borderColor:'tomato'}}>
										<Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'white',fontFamily:'sans-serif-condensed'}}>Save Profile</Text>
									</TouchableOpacity>
			
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								
									<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} ></Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"}  </Text>
									</Text>
								</View>
							</View>
						</View>
                    </View>
                </ScrollView>
            </View>
			</View>
		)
		else if(showWhat)
			return(
			<View style={styles.MainContainer}> 
				<View style={{marginTop:70}}>
					
					<Text style={{fontFamily:'sans-serif-condensed',fontWeight:'bold',fontSize:18,marginLeft:20,marginRight:20,color:'black'}}>Thanks a lot for participating, your Pofile have been captured</Text>
					
					<View style={{borderBottomWidth:1,marginBottom:5,marginTop:5}}>
					
					</View>
					<View style={{marginLeft:23,marginRight:23,marginTop:20}}>
						<Text style={{fontSize:16,fontWeight:'bold'}}>The following were captured at every scroll event detected</Text>
						<View>
							<Text>1. X & Y screen finger touch coordinates when scrolling</Text>
							<Text>2. Time Interval, time between screen finger touch and release for every scroll event detected</Text>
							<Text>3. Tilt angle - the tilted z-angle of the Android mobile Device in space for every scroll event detected</Text>
							<Text>4. Left or right scroller i.e Whether left or right thumb was used when scrolling</Text>
						</View>	
						
						<View style={{borderBottomWidth:1,borderBottomColor:'white'}}> 
						</View>
						
						
						
						<View style={{marginTop:10}}>
							<TouchableOpacity onPress={
								() => _LoadProfile()
							}
							style={{justifyContent: 'center',alignSelf:'center',backgroundColor:'tomato',width:'80%',height:40,borderWidth:5,borderColor:'tomato'}}>
								<Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'white',fontFamily:'sans-serif-condensed'}}>View Profile</Text>
							</TouchableOpacity>
						</View>
						
						
					</View>
				</View>	
			</View>
		)
		else if(showProf){
			return (
				<View style={styles.MainContainer}>
					<ScrollView>
						<View style={{marginRight:15, marginLeft:15}}>
							<Text style={{alignSelf:'center',fontWeight:'bold',fontFamily:'sans-serif-condensed'}}>Coordinates</Text>
							<Text>X: {" "}{hX}</Text>
							<Text>Y: {" "}{hY}</Text>
							
							<Text style={{alignSelf:'center',fontWeight:'bold',fontFamily:'sans-serif-condensed'}}>Time Intervals</Text>
							<Text>Times : {" "}{stringT}</Text>
							
							<Text style={{alignSelf:'center',fontWeight:'bold',fontFamily:'sans-serif-condensed'}}>Z-Angle</Text>
							<Text>Side : {" "}{stringAlpha}</Text>
							
							<Text style={{alignSelf:'center',fontWeight:'bold',fontFamily:'sans-serif-condensed'}}>Scrolling Side</Text>
							<Text>Side : {" "}{stringS}</Text>
						</View>	
					</ScrollView>
				</View>
			)
		}
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
	
  },
});
export default  BuildProfile;