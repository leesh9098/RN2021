/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   ScrollView,
   View
 } from 'react-native';
 
 class App extends Component {
     constructor() {
         super()
         this.state = {
             inputValue: '',
             todos: [],
             type: 'All'
         }
     }
     render() {
         return (
             <View style={styles.container}>
                 <ScrollView keyboardShouldPersistTaps='always' style={styles.content}></ScrollView>
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#f5f5f5'
     },
     content: {
         flex: 1,
         paddingTop: 60
     }
 })

 export default App