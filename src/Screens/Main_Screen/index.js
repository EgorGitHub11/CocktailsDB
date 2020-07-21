import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import my components
import HomeScreen from './Main';
import FilterScreen from '../Filtered_Screen/Filtered';

import { Context } from '../../context'



const Stack = createStackNavigator();

function index() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Filter" component={FilterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default index;
