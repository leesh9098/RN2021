<<<<<<< HEAD
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
   handleClick() {
     this._timeout = setTimeout(() => {
       this.openWidget();
     }, 2000);
   }
   componentWillUnmount() {
     clearTimeout(this._timeout);
   }
 
   render() {
     return <SomeComponent handleClick={() => this.handleClick()} />
   }
 }
 
=======
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
   handleClick() {
     this._timeout = setTimeout(() => {
       this.openWidget();
     }, 2000);
   }
   componentWillUnmount() {
     clearTimeout(this._timeout);
   }
 
   render() {
     return <SomeComponent handleClick={() => this.handleClick()} />
   }
 }
 
>>>>>>> 4cb688cecfb982c3725a9dbf263aed1002d71e38
 export default MainComponent;