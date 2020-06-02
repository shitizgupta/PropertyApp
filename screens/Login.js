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
    TouchableOpacity
} from "react-native";
import Theme from "../Theme";

//login
class Login extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* logo here */}
                <View style={styles.logoWrapper}>
                    <Image source={Theme.logofull} style={{ height: 250, width: 250, resizeMode: 'contain' }} />
                </View>
                {/* entries for logins */}
                <View style={styles.entryWrapper}>
                    {/* email and phone number */}
                    <Text style={{ fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Email or Phone Number</Text>
                    <TextInput placeholderTextColor={'black'} placeholder={'Eg: Johnssans@gmail.com'} style={styles.input} />
                    {/* password entry here */}
                    <Text style={{ paddingTop: 10, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Password</Text>
                    <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder={'*********'} style={styles.input} />

                    {/* login btn */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.mainBtn}>
                        <Text style={{ fontSize: 17, color: '#fff' }}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={{ width: '100%', alignItems: 'center', paddingTop: 10 }}>
                        <Text style={{ fontSize: 14, paddingTop: 15 }}>Don't have an account? <Text style={{ fontWeight: 'bold', color: Theme.secondary }}>SIGNUP</Text></Text>
                    </TouchableOpacity>

                </View>
                {/* social logo icons */}
                <View style={styles.socialWrapper}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.line} />
                        <Text> OR LOGIN WITH </Text>
                        <View style={styles.line} />
                    </View>

                    <View style={styles.socialIcons}>
                        <TouchableOpacity>
                            <Image source={Theme.google} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Theme.fb} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Theme.twitter} style={{ height: 31, width: 31, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>

                </View>
                {/* forgot password here */}
                <View style={styles.forgotWrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
                        <Text style={{ fontSize: 16 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView >
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white
    },
    logoWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    entryWrapper: {
        flex: 4,
        paddingHorizontal: 25,
    },
    socialWrapper: {
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: 'space-around'
    },
    forgotWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        fontSize: 17
    },
    mainBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.primary
    },
    line: {
        backgroundColor: '#e5e5e5',
        height: 0.7,
        width: '36%'
    },
    socialIcons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    }
});