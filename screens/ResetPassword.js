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


//reset
class ResetPassword extends React.Component {



    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* Uploading images section */}
                <View style={styles.logoWrapper}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ paddingTop: 15, fontSize: 22, fontWeight: 'bold', color: Theme.primary }}>Reset Password</Text>
                        <Text style={{ paddingTop: 5 }}>Please enter your email and phone number</Text>
                    </TouchableOpacity>
                </View>
                {/* entries for registering */}
                <View style={styles.entryWrapper}>
                    <View>

                        <View>
                            <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Password</Text>
                            <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder={'******'} style={styles.input} />
                        </View>


                        <View>
                            <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Confirm Password</Text>
                            <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder={'******'} style={styles.input} />
                        </View>
                    </View>

                    {/* register btn */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.mainBtn}>
                        <Text style={{ fontSize: 17, color: '#ffff' }}>Reset</Text>
                    </TouchableOpacity>


                </View>






            </SafeAreaView >
        );
    }
}
export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white
    },
    logoWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    entryWrapper: {
        flex: 7,
        paddingHorizontal: 25,
        justifyContent: 'space-around',
        paddingVertical: 20,
        paddingBottom: 50
    },
    input: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        fontSize: 16
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
    inputPhone: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        fontSize: 16,
        width: '80%'
    },
});