import React, { Component } from 'react';
//import react in our code.
import {StyleSheet, View, Platform, Text, PanResponder,ScrollView,Animated,Button,Alert ,TouchableOpacity} from 'react-native';
//import all the components we are going to use.
import {DeviceMotion} from 'expo-sensors';
export default class Home extends Component {
  constructor() {
    super();
    //initialize state
    this.panResponder;
    this.state = {
			locationX: 0,
			locationY: 0,
			rData: null,
		};
	}
	onPress = (evt) =>{
		this.setState({
			locationX: evt.nativeEvent.locationX.toFixed(2),
			locationY: evt.nativeEvent.locationY.toFixed(2),
        });
 }
  render() {
   
		return (
			<View style={styles.MainContainer}>
			 <Text>
				X: {this.state.locationX}, Y: {this.state.locationY}
			 </Text>
			 
      
            <View style={styles.childView}>
            {/*Text to show the screen location we get*/}
              
                  <ScrollView
                    style={{height:1500}}
                    onPress={(evt) => this.onPress(evt)}
                    onTouchStart={(evt) => this.onPress(evt)}
                  >
                   
                      <View style={{backgroundColor:"red",height:200}}>
						<Button title="click me" onPress={()=> alert('clicked me')}/>
                      </View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                       <View style={{backgroundColor:"red",height:200}}>
                      </View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                       <View style={{backgroundColor:"red",height:200}}>
                      </View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                      <View style={{backgroundColor:"blue",height:200}}></View>
                      <View style={{backgroundColor:"yellow",height:200}}></View>
                      <View style={{backgroundColor:"pink",height:200}}></View>
                      <View style={{backgroundColor:"red",height:200}}></View>
                   
                  </ScrollView>
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