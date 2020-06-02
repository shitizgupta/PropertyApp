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
} from "react-native";
import Theme from "../Theme";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

//Forgot
class Forgot extends React.Component {
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
                        <Text style={{ paddingTop: 15, fontSize: 22, color: Theme.primary, fontWeight: 'bold' }}>Forgot password?</Text>
                        <Text style={{ paddingTop: 5 }}>Please enter your email and phone number</Text>
                    </TouchableOpacity>
                </View>
                {/* entries for registering */}
                <View style={styles.entryWrapper}>

                    <View>

                        <View>
                            {/* email and phone number */}
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
                                <TextInput placeholderTextColor={'black'} placeholder={'Enter phone here'} style={styles.inputPhone} />
                            </View>
                        </View>


                        <View>
                            {/* email and phone number */}
                            <Text style={{ paddingTop: 15, fontSize: 14, opacity: 0.5, paddingLeft: 3 }}>Email</Text>
                            <TextInput placeholderTextColor={'black'} placeholder={'Eg: Johnssans@gmail.com'} style={styles.input} />
                        </View>
                    </View>


                    <View style={{ height: 35 }} />

                    {/* code btn */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ResetPassword')} style={styles.mainBtn}>
                        <Text style={{ fontSize: 17, color: '#fff' }}>Send Code</Text>
                    </TouchableOpacity>

                </View>


            </SafeAreaView >
        );
    }
}
export default Forgot;

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
        paddingVertical: 15,
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
        width: '70%'
    },
});