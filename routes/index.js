// Powered By Development Here 
// www.devhere.co
// Terms: https://devhere.co/terms-and-conditions
// Started in (28-05-2020)
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import Splash from '../screens/Splash'
import Onboard from '../screens/Onboard'
import Login from '../screens/Login'
import Register from '../screens/Register';
import Otp from '../screens/Otp';
import Forgot from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Home from '../screens/Home';

const Stack = createStackNavigator();
// stack navigator
class Route extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Splash' component={Splash} />
                    <Stack.Screen name='Onboard' component={Onboard} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                    <Stack.Screen name='Otp' component={Otp} />
                    <Stack.Screen name='Forgot' component={Forgot} />
                    <Stack.Screen name='ResetPassword' component={ResetPassword} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Route;