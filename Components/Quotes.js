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



const  Quotes = () => {

		return (
						<View>
							<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
									<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >1</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Life is what happens when you are busy making other plans. 
										<Text style={{alignSelf:'center',fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} John Lennon </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >2</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Get busy living or get busy dying. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Stephen King </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
									<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >3</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >You only live once, but if you do it right, once is enough. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Mae West </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >4</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Many of life’s failures are people who did not realize how close they were to success when they gave up. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Thomas A. Edison </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >5</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Life is what happens when you are busy making other plans. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} John Lennon </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >6</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >If you want to live a happy life, tie it to a goal, not to people or things. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Albert Einstein </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >7</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Never let the fear of striking out keep you from playing the game. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Babe Ruth </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >8</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Money and success don’t change people; they merely amplify what is already there.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Will Smith </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >9</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Steve Jobs </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >10</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >10. Not how long, but how well you have lived is the main thing.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Seneca </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >11</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >If life were predictable it would cease to be life, and be without flavor.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Eleanor Roosevelt </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >12</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Henry Ford </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >13</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >In order to write about life first you must live it. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Ernest Hemingway </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >14</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >The big lesson in life, baby, is never be scared of anyone or anything.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Frank Sinatra </Text>
									</Text>
								</View>
								
								
								
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >15</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Life is what happens when you are busy making other plans. 
										<Text style={{alignSelf:'center',fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} John Lennon </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >16</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Get busy living or get busy dying. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Stephen King </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >17</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >You only live once, but if you do it right, once is enough. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Mae West </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >18</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Many of life’s failures are people who did not realize how close they were to success when they gave up. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Thomas A. Edison </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >19</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Life is what happens when you are busy making other plans. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} John Lennon </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >20</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >If you want to live a happy life, tie it to a goal, not to people or things. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Albert Einstein </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >21</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Never let the fear of striking out keep you from playing the game. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Babe Ruth </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >22</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Money and success don’t change people; they merely amplify what is already there.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Will Smith </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >23</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Steve Jobs </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >24</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Not how long, but how well you have lived is the main thing.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Seneca </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >25</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >If life were predictable it would cease to be life, and be without flavor.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Eleanor Roosevelt </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >26</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Henry Ford </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >27</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >In order to write about life first you must live it. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Ernest Hemingway </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								
									<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >28</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >The big lesson in life, baby, is never be scared of anyone or anything.. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Frank Sinatra </Text>
									</Text>
								</View>
								
								
								
								
								
								
							<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
									<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >29</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >All our dreams can come true, if we have the courage to pursue them. 
										<Text style={{alignSelf:'center',fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Walt Disney </Text>
									</Text>
							</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >30</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“The secret of getting ahead is getting started.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Mark Twain </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
									<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >31</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Michael Jordan </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >32</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Many of life’s failures are people who did not realize how close they were to success when they gave up. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Thomas A. Edison </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >33</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Mary Kay Ash </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >34</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“The best time to plant a tree was 20 years ago. The second best time is now.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Chinese Proverb </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >35</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >Never let the fear of striking out keep you from playing the game. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Babe Ruth </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >36</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Only the paranoid survive.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Andy Grove </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >37</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“It’s hard to beat a person who never gives up.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Babe Ruth </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >38</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"}Leah Busque</Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >39</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“If people are doubting how far you can go, go so far that you can’t hear them anymore.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Michele Ruiz </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >40</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Arianna Huffington </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >41</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Joss Whedon </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >42</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"}William W. Purkey </Text>
									</Text>
								</View>
								
								
								
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >43</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” 
										<Text style={{alignSelf:'center',fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Neil Gaiman </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >44</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Everything you can imagine is real.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Pablo Picasso </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >45</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >You only live once, but if you do it right, once is enough. 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Mae West </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >46</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Helen Keller </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >47</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Do one thing every day that scares you.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"}Eleanor Roosevelt </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >48</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“It’s no use going back to yesterday, because I was a different person then.”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Lewis Carroll </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >49</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Socrates </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >50</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Do what you feel in your heart to be right – for you’ll be criticized anyway.”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Eleanor Roosevelt </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >51</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Happiness is not something ready made. It comes from your own actions.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Dalai Lama XIV </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >52</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Whatever you are, be a good one.”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Abraham Lincoln </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >53</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.”
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Unknown </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >54</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“If we have the attitude that it’s going to be a great day it usually is.”  
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Catherine Pulsifier </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >55</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“You can either experience the pain of discipline or the pain of regret. The choice is yours.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Unknown </Text>
									</Text>
								</View>
								
								<View style={{borderBottomColor: 'white',borderBottomWidth: 1,paddingBottom:30,paddingTop:30}}>
								
									<Text style={{justifyContent: 'center',alignSelf:'center',fontSize:15,color:'black',fontFamily:'sans-serif-condensed',fontWeight:'bold'}} >56</Text>
									<Text style={{fontSize:15,color:'black',fontFamily:'sans-serif-condensed',paddingRight:20,paddingLeft:20,}} >“Impossible is just an opinion.” 
										<Text style={{fontSize:13,color:'black',fontFamily:'sans-serif-condensed',color:'blue',}}>{"\n"} Paulo Coelho </Text>
									</Text>
								</View>
						</View>
							)
}
export default Quotes;