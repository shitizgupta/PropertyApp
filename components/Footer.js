// Powered By Development Here 
// www.devhere.co
// Terms: https://devhere.co/terms-and-conditions
// Started in (28-05-2020)
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import Theme from "../Theme";

const Footer = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={Theme.find} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 12 }}>Find</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={Theme.saved} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 12 }}>Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={Theme.bell} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 12 }}>Notify</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={Theme.property} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 12 }}>My property</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={Theme.more} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 12 }}>More</Text>
            </TouchableOpacity>

        </View>
    );

}
export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderTopColor: '#e5e5e5',
        borderTopWidth: 1
    }
});