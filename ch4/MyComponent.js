import React, { Component } from 'react'
// import { Text, View, Touchablehighlight } from 'react-native' // 코드 4.4
// import { Text, View, Touchablehighlight } from 'react-native' // 코드 4.4
// import { styles, buttons } from './component/styles' // 코드 4.4

import { Button, StyleSheet, View } from 'react-native'; // 코드 4.6
import getStyleSheet from './MyComponentStyles';

export default class MyComponent extends Component {
    // 코드 4.6
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: false
        }
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({ darkTheme: !this.state.darkTheme })
    };

    render() {
        /* 코드 4.4
        return (
            <View style={styles.container}>
                <Touchablehighlight style={buttons.primary}>
                    <Text>Sample Text</Text>
                </Touchablehighlight>
            </View>
        )
        */

        // 코드 4.6
        const styles = getStyleSheet(this.state.darkTheme);
        const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Button title={backgroundColor} onPress={this.toggleTheme} />
                </View>
            </View>
        )
    }
}
