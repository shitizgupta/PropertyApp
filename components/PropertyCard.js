import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

class PropertyCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 3 }}>
                    {/* container for the image */}
                </View>
                <View style={{ paddingLeft: 20, flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', opacity: 0.7 }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 12, opacity: 0.5 }}>{this.props.street}</Text>
                </View>
            </View>
        );
    }
}
export default PropertyCard;

const styles = StyleSheet.create({
    container: {
        height: '95%',
        width: 190,
        borderRadius: 35,
        backgroundColor: '#EFEFEF',
        marginLeft: 20
    }
});