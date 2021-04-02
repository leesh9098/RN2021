/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   CameraRoll,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 class MainComponent extends Component {
   constructor() {
     super()
     this.state = { loading: true, data: {} }
   }
   componentDidMount() {
     // #simulate ajax call
     setTimeout(() => {
       this.setState({
         loading: false,
         data: {name: 'Nadar Dabit', age: 35}
       })
     }, 2000)
   }
   render() {
     if(this.state.loading) {
       return <Text>Loading</Text>
     }
     const { name, age } = this.state.data
     return (
       <View>
         <Text>Name: {name}</Text>
         <Text>Age: {age}</Text>
       </View>
     )
   }
 }
 
 export default MainComponent;