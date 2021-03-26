/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      year: 2018,
      leapYear: true,
      topics: ['React', 'React Native', 'JavaScript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming'
      },
      name: 'Nader Dabit',
      colors: ['blue']
    }
  }
  updateYear() {
    this.setState({
      year: 2021
    })
  }

  render() {
    let leapyear = <Text>This is not a leapyear!</Text>
    if (this.state.leapYear) {
      leapyear = <Text>This is a leapyear!</Text>
    }
    return (
      <View>
        <Text onPress={() => this.updateYear()}>
          The year is: {this.state.year}
        </Text>
        <Text>My name is: {this.state.name}</Text>
        <Text>My colors are: {this.state.colors[0]}</Text>
        <Text>{this.state.year}</Text>
        <Text>Length: {this.state.info.length}</Text>
        <Text>Type: {this.state.info.type}</Text>
        {leapyear}
      </View>
    )
  }
}

export default App;
