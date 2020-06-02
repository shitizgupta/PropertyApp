// Powered By Development Here 
// www.devhere.co
// Terms: https://devhere.co/terms-and-conditions
// Started in (28-05-2020)
import React, { useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Theme from "../Theme";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

//register
class Register extends React.Component {
    state = {
        selectedCode: '+965',

    };

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu1 = () => {
        this._menu.hide();
        this.setState({ selectedCode: '+965' })
    };

    hideMenu2 = () => {
        this._menu.hide();
        this.setState({ selectedCode: '+966' })
    };


    hideMenu3 = () => {
        this._menu.hide();
        this.setState({ selectedCode: '+971' })
    };


    showMenu = () => {
        this._menu.show();
    };

    render() {

        return (
            <SafeAreaView style={styles.container}>
                {/* Uploading images section */}
                <View style={styles.logoWrapper}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={Theme.upload} style={{ height: 90, width: 90, resizeMode: 'contain' }} />
                        <Text style={{ paddingTop: 15, color: Theme.secondary, fontWeight: 'bold' }}>Add Your Photos</Text>
                    </TouchableOpacity>
                </View>
                {/* entries for registering */}
                <View style={styles.entryWrapper}>

                    <View>
                        {/* name */}
                        <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Full Name</Text>
                        <TextInput placeholderTextColor={'black'} placeholder={'Enter your name'} style={styles.input} />
                    </View>

                    <View>
                        {/* phone number */}
                        <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Phone Number</Text>
                        {/* phone number key code here */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* picker for country code */}
                            <View style={{ paddingVertical: 15, width: '15%', borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                <Menu
                                    style={{ backgroundColor: '#fff' }}
                                    ref={this.setMenuRef}
                                    button={<Text onPress={this.showMenu}><Text syle={{ fontSize: 22 }}>{this.state.selectedCode}</Text></Text>}
                                >
                                    <MenuItem onPress={this.hideMenu1}><Text>+965</Text></MenuItem>
                                    <MenuDivider />
                                    <MenuItem onPress={this.hideMenu2}><Text>+966</Text></MenuItem>
                                    <MenuDivider />
                                    <MenuItem onPress={this.hideMenu3}><Text>+971</Text></MenuItem>
                                </Menu>
                            </View>
                            <View style={{ width: '5%' }}></View>
                            <TextInput placeholderTextColor={'black'}
                                placeholder={'Eg: Johnssans@gmail.com'} style={styles.inputPhone} />
                        </View>
                    </View>


                    <View>
                        {/* email */}
                        <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Email</Text>
                        <TextInput placeholderTextColor={'black'} placeholder={'Eg: Johnssans@gmail.com'} style={styles.input} />
                    </View>

                    <View>
                        {/* pass */}
                        <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Password</Text>
                        <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder={'***********'} style={styles.input} />
                    </View>

                    <View>
                        {/* confirm pass */}
                        <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Confirm Password</Text>
                        <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder={'***********'} style={styles.input} />
                    </View>


                    <View style={{ height: 35 }} />

                    {/* register btn */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')} style={styles.mainBtn}>
                        <Text style={{ fontSize: 17, color: '#fff' }}>Register</Text>
                    </TouchableOpacity>

                </View>


            </SafeAreaView >
        );
    }
}
export default Register;

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
        fontSize: 16
    },
    mainBtn: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 100,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.primary
    },
    inputPhone: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        fontSize: 16,
        width: '80%'
    },
});