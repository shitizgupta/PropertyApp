// Powered By Development Here 
// www.devhere.co
// Terms: https://devhere.co/terms-and-conditions
// Started in (28-05-2020)
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import Swiper from 'react-native-swiper'
import Theme from '../Theme'


// swiper for onboards
export default class SwiperComponent extends Component {
    state = {
        currentIndex: 0,
        pagination: 0
    }

    // function to fix the swiper bottom button
    nextPressed = () => {
        const pagination = this.state.pagination
        this.refs.swiper.scrollBy(1)
        if (pagination < 2) {
            this.setState({ pagination: pagination + 1 })
        }
        else {
            this.setState({ pagination: 0 })
        }


    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* full view */}
                <View style={{ flex: 7 }}>
                    <Swiper scrollEnabled={false} index={this.state.currentIndex} ref='swiper'
                        activeDotStyle={{ width: 30, backgroundColor: Theme.primary }} dotStyle={{ borderWidth: 2, borderColor: '#e5e5e5', backgroundColor: 'transparent' }} style={styles.wrapper} >
                        {/* slide 1 */}
                        <View style={styles.slide1}>
                            <Image source={Theme.vector1} style={{ height: 350, width: 350, resizeMode: 'contain' }} />
                            <Text style={styles.text}>Rent or buy a property</Text>
                            <Text style={styles.subtext}>Select your own house to buy or rent by online</Text>
                        </View>
                        {/* slide 2 */}
                        <View style={styles.slide2}>
                            <Image source={Theme.vector2} style={{ height: 350, width: 350, resizeMode: 'contain' }} />
                            <Text style={styles.text}>Visit the property in real</Text>
                            <Text style={styles.subtext}>Make a appointment with the owner and view the property details</Text>
                        </View>
                        {/* slide 3 */}
                        <View style={styles.slide3}>
                            <Image source={Theme.vector3} style={{ height: 350, width: 350, resizeMode: 'contain' }} />
                            <Text style={styles.text}>Easy deal</Text>
                            <Text style={styles.subtext}>Find your dream house, make a payment, and sign the e-contract</Text>
                        </View>
                    </Swiper>
                </View>

                {/* next button area here */}
                {this.state.pagination == 2 ?
                    <View style={{ flex: 1, backgroundColor: Theme.white, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.getstarted}>
                            <Text style={[styles.nexttext, { color: '#fff' }]}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{ flex: 1, backgroundColor: Theme.white, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 25 }}>
                        <TouchableOpacity onPress={() => this.nextPressed()} style={styles.nextbtn}>
                            <Text style={styles.nexttext}>NEXT</Text>
                            <Image source={require('../assets/images/right-arrow.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                    </View>
                }

            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.white
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.white
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.white
    },
    text: {
        fontSize: 25,
        paddingTop: 20
    },

    subtext: {
        fontSize: 17,
        paddingTop: 10,
        textAlign: 'center',
        paddingHorizontal: 80,
        opacity: 0.7
    },
    nextbtn: {
        borderWidth: 1,
        borderRadius: 50,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nexttext: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    getstarted: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        width: '90%',
        backgroundColor: Theme.primary
    },
})
