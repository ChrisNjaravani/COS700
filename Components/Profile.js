import React, {useState, Component } from 'react';
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
import Welcome from './Welcome';
import Login from './Welcome';
export default function Profile() {
	const [showLo, setLog] = useState(true);
	
	
		return(
				<Welcome name={showLo}/>
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
	justifyContent: 'center'
  },
});

