// Powered By Development Here 
// www.devhere.co
// Terms: https://devhere.co/terms-and-conditions
// Started in (28-05-2020)
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image
} from "react-native";

import Theme from '../Theme'

class Splash extends React.Component {

    componentDidMount() {
        setTimeout((navigation) => {
            this.props.navigation.navigate('Onboard')
        }, 2000);
    }

    // component did mount used to navigate to other screen

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* image and text */}
                <Image source={Theme.logofull} style={styles.logo} />
                {/* <Text style={styles.title}>Your trusted real estate</Text> */}

            </SafeAreaView>
        );
    }
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.white
    },
    logo: {
        height: 250,
        width: 300,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 16
    }
});