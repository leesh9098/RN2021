import { StyleSheet } from 'react-native';

// 코드 4.3
/* const styles = StyleSheet.create({
    containter: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap'
    }
})

const buttons = StyleSheet.create({
    primary: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }
}) */

// 코드 4.5
export const Colors = {
    dark: 'black',
    light: 'white'
};

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
};

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
});

// export { styles, buttons }
export default function getStyleSheet(useDarkTheme) {
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}