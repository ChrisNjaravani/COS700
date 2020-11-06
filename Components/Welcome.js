import React, { Component, useState,useEffect, } from 'react';
import * as Permissions from 'expo-permissions';
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
	} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BuildProfile from './BuildProfile';


const  Welcome = (props) => {
	const [modalVisi, setModalVisi] = useState(false);
	const [displayCreate, setCreate] = useState(false);
	const [propsShow,setProps] =useState(true);
	const [showCreateB,setCreateB] =useState(false);
	const [showBuildProfile,setBuildProfile] =useState(false);
	const [userName,setUserName] =useState(null);
	const [initName, setInitName] = useState(false);
	const [tempName, setTempName] = useState('');
	
	
	/* my functions  to handle welcome screens */
	const Login = () => {
		if(tempName != ''){
			setUserName(tempName);
			setInitName(true);
			setProps(false);
			setCreateB(true);
		}
		else{
			alert("Username is Empty");
		}
	};
	const loadBuildProfile =() =>{
		setCreateB(false);
		setBuildProfile(true);
	};
	const handleUserName =(value) => {
		setTempName(value)
		if(initName){
			setUserName(value);
		}
		
	};
	if(!props.name){return null}
	else if(props.name && propsShow) {
		return(
		
			<View style={styles.MainContainer}>
				
				<View style={styles.childView}>
				
					<Text style={styles.welcomeText}>Login  with name</Text>
					<TextInput
						style={{alignSelf:'center',height: 40, borderColor: 'gray', borderBottomWidth: 1,paddingLeft:0, width:'80%'}}
						placeholder="Enter name here to build profile"
						onChangeText={(value)=>handleUserName(value)}
					/>
					<View style={{marginTop:10}}>
						<TouchableOpacity onPress={
							() => Login()
						}
						style={{justifyContent: 'center',alignSelf:'center',backgroundColor:'tomato',width:'80%',height:40,borderWidth:5,borderColor:'tomato'}}>
							<Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'white',fontFamily:'sans-serif-condensed'}}>Login</Text>
						</TouchableOpacity>
					</View>
					
					<View style={{marginTop:20}}>
						<TouchableOpacity 
							onPress={() => {
								setModalVisi(true);
							}}
							style={{justifyContent: 'center',alignSelf:'center',}}>
								<Text style={{alignSelf:'center',fontSize:15,fontWeight:'normal',color:'black',fontFamily:'sans-serif-condensed',borderBottomWidth:1,borderColor:'blue',}}>New user? Click here</Text>
						</TouchableOpacity>
					</View>
					
				</View>
				<View>
					<Modal
						animationType="slide"
						transparent={false}
						visible={modalVisi}
					>
						<View style={{paddingRight:20,paddingTop:15}}>
							<Ionicons
								name="ios-close-circle-outline"
								color="tomato"
								style={{alignSelf:'flex-end'}}
								onPress={() => {
										setModalVisi(!modalVisi);
								}}
								size={30}
							/>
						</View>
						<View style={styles.childView}>
							<Text style={styles.welcomeText}>Sign in  with your name</Text>
							<TextInput
								style={{alignSelf:'center',height: 40, borderColor: 'gray', borderBottomWidth: 1,paddingLeft:0, width:'80%'}}
								placeholder="Enter name here to create account"
							/>
							<View style={{marginTop:10}}>
								<TouchableOpacity  style={{justifyContent: 'center',alignSelf:'center',backgroundColor:'tomato',width:'80%',height:40,borderWidth:5,borderColor:'tomato'}}>
									<Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'white',fontFamily:'sans-serif-condensed'}}>Sign in</Text>
								</TouchableOpacity>
							</View>
							
							
						
						</View>
					</Modal>
				</View>
			</View>
		)
	}
	else if(showCreateB){
		return (
			<View style={{flex:1,overflow:'hidden',paddingTop:40,}}>
				<View style={{paddingRight:20,paddingTop:15,flexDirection: 'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'gray'}}>
					<Text style={{textAlign: 'left',paddingLeft:20}}>
						<Ionicons
							name="ios-contact"
							color="black"
							style={{textAlign: 'left',}}
							size={35}
						/>
						
					</Text>
					<Text style={{color:'red',paddingTop:15,fontSize:15,fontFamily:''}}>{userName}</Text>
					<Text style={{textAlign: 'right'}}>
						<Ionicons
							name="ios-log-out"
							color="tomato"
							style={{textAlign: 'right'}}
							onPress={() => {
									alert('log out');
							}}
							size={35}
						/>
					</Text>
				</View>
				
				
				<View style={{justifyContent:'center',paddingTop:70}}>
					<Text style={{paddingBottom:10,fontSize:20,fontWeight:'bold',color:'black',fontFamily:'sans-serif-condensed',alignSelf:'center'}}>Instructions</Text>
					<View style={{paddingLeft:25,paddingRight:25,justifyContent: 'center',alignSelf:'center',paddingBottom:10}}>
						<Text style={{fontSize:15,fontWeight:'normal',color:'black',fontFamily:'sans-serif-condensed'}}>1. Inoder to build your profile, Click the <Text style={{color:'tomato'}}>Create Profile</Text> button below.</Text>
						<Text style={{fontSize:15,fontWeight:'normal',color:'black',fontFamily:'sans-serif-condensed'}}>2. Once you get started, your information is saved in the background.</Text>
						<Text style={{fontSize:15,fontWeight:'normal',color:'black',fontFamily:'sans-serif-condensed'}}>3.Once Profile is complete,You will get a notification.</Text>
					</View>
					<TouchableOpacity 
						onPress={()  => loadBuildProfile()}
						style={{justifyContent: 'center',alignSelf:'center',backgroundColor:'tomato',width:'80%',height:40,borderWidth:5,borderColor:'tomato'}}>
						<Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'white',fontFamily:'sans-serif-condensed'}}>Create Profile</Text>
					</TouchableOpacity>
				</View>
			</View>	
		)
	}
	else if(showBuildProfile){
		return <BuildProfile name={userName}/>
		
	}
	
};
const styles = StyleSheet.create({
 
  childView: {
    flex: 1,
    overflow: 'hidden',
	marginTop: 5,
	justifyContent: 'center',
  },
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
  },
  welcomeText: {
	alignSelf:'center',
	justifyContent: 'center',
	color:'black',
	fontFamily: 'sans-serif-condensed',
	fontSize:30,
	fontWeight:'normal'
  },
});
export default Welcome;