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
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from "react-native";

import Theme from '../Theme'
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";

//replace with your data , this is sample data for property
const DATA = [
    {
        id: '1',
        name: 'Property Name',
        street: 'Streets Name',
        image: null
    },
    {
        id: '2',
        name: 'Property Name',
        street: 'Streets Name',
        image: null
    },
    {
        id: '3',
        name: 'Property Name',
        street: 'Streets Name',
        image: null
    },
    {
        id: '4',
        name: 'Property Name',
        street: 'Streets Name',
        image: null
    },

];

class Home extends React.Component {


    state = {
        saleWeight: 'bold',
        saleLine: true,
        rentWeight: 'normal',
        rentLine: false
    }

    saleLogic = () => {
        const { saleWeight, saleLine, rentWeight, rentLine } = this.state;
        this.setState({ saleLine: true })
        this.setState({ saleWeight: 'bold' })
        this.setState({ rentLine: false })
        this.setState({ rentWeight: 'normal' })
    }

    rentLogic = () => {
        const { saleWeight, saleLine, rentWeight, rentLine } = this.state;
        this.setState({ saleLine: false })
        this.setState({ saleWeight: 'normal' })
        this.setState({ rentLine: true })
        this.setState({ rentWeight: 'bold' })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* this is the top portion */}
                <ImageBackground style={styles.mainWrapper}>
                    <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 25 }}>
                        <Image source={Theme.user} style={{ height: 45, width: 45, resizeMode: 'contain' }} />
                    </View>
                    <View style={{ flex: 5, paddingHorizontal: 20, justifyContent: 'space-evenly' }}>
                        <Text style={styles.title}>Start find your dream {"\n"}homes come here</Text>
                        <TouchableOpacity>
                            <Text style={[styles.title], { fontSize: 15 }}>Chicago , US ↓</Text>
                        </TouchableOpacity>




                        {/* tab view  */}
                        <View style={styles.tabWrapper}>
                            <TouchableOpacity onPress={() => this.saleLogic()} style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: this.state.saleWeight, color: '#7c7c7c', fontSize: 16 }}>For Sale</Text>
                                {this.state.saleLine == true ?
                                    <View style={{ width: 50, height: 5, borderRadius: 50, backgroundColor: '#7c7c7c' }} />
                                    :
                                    null
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.rentLogic()} style={{ alignItems: 'center', paddingLeft: 25 }}>
                                <Text style={{ fontWeight: this.state.rentWeight, color: '#7c7c7c', fontSize: 16 }}>For Rent</Text>
                                {this.state.rentLine == true ?
                                    <View style={{ width: 50, height: 5, borderRadius: 50, backgroundColor: '#7c7c7c' }} />
                                    :
                                    null
                                }
                            </TouchableOpacity>
                        </View>


                        {/* address school city input */}

                        <View style={styles.inputWrapper}>
                            <TextInput style={{ width: '80%', fontSize: 15 }} placeholder={'Address School or City'} />
                            <TouchableOpacity>
                                <Image source={Theme.filter} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>



                    </View>
                </ImageBackground>
                {/* items with scrollable cards lie here */}
                <View style={styles.secondWrapper}>
                    {/* recommended title */}
                    <View style={{ padding: 20 }}>
                        <Text style={styles.title}>Our Recommended</Text>
                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={[styles.title, { fontSize: 14, fontWeight: 'normal' }]}>Displaying Nearby's Items</Text>
                            <TouchableOpacity>
                                <Text style={[styles.title, { fontSize: 14, fontWeight: 'normal' }]}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={{ flex: 1 }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={DATA}
                            renderItem={({ item }) => <PropertyCard name={item.name} img={item.img} street={item.street} />}
                            keyExtractor={item => item.id}
                        />

                    </View>


                </View>



                {/* footer static component */}
                <Footer />
            </SafeAreaView>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white
    },
    mainWrapper: {
        flex: 6,
        backgroundColor: '#F8F8F8',
        borderBottomRightRadius: 50
    },
    secondWrapper: {
        flex: 5,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#707070'
    },
    tabWrapper: {
        flexDirection: 'row',
    },
    inputWrapper: {
        backgroundColor: '#F2F2F2',
        width: '100%',
        paddingVertical: 2,
        borderRadius: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});