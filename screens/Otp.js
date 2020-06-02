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
    Image,
    TextInput,
    TouchableOpacity,
    Picker
} from "react-native";
import Theme from "../Theme";

//register
class Otp extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* verificaiton text */}
                <View style={styles.logoWrapper}>

                    <Text style={{ paddingHorizontal: 50, textAlign: 'center', fontSize: 22 }}>
                        Sent a verification code to verify your account
                        </Text>

                </View>

                {/* entries for code */}
                <View style={styles.entryWrapper}>

                    <View style={styles.codewrapper}>
                        <TextInput keyboardType={'numeric'} maxLength={1} textAlign={'center'} placeholder={'0'} style={styles.input} />
                        <TextInput keyboardType={'numeric'} maxLength={1} textAlign={'center'} placeholder={'0'} style={styles.input} />
                        <TextInput keyboardType={'numeric'} maxLength={1} textAlign={'center'} placeholder={'0'} style={styles.input} />
                        <TextInput keyboardType={'numeric'} maxLength={1} textAlign={'center'} placeholder={'0'} style={styles.input} />
                    </View>

                    {/* verify btn */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.mainBtn}>
                        <Text style={{ fontSize: 17, color: '#fff' }}>Verify</Text>
                    </TouchableOpacity>

                </View>



            </SafeAreaView >
        );
    }
}
export default Otp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white
    },
    logoWrapper: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    entryWrapper: {
        flex: 7,
        paddingHorizontal: 25,
        justifyContent: 'space-evenly',
        paddingVertical: 20
    },
    input: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        fontSize: 52,
        width: '20%',
    },
    mainBtn: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 100,
        backgroundColor: Theme.primary,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    codewrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});