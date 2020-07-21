import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import my components
import HomeScreen from './Main';
import FilterScreen from '../Filtered_Screen/Filtered';

import { createStore } from 'redux';
import { Provider }  from 'react-redux';
import { rootReducer } from '../Redux/reducer'

const store = createStore(rootReducer)


const Stack = createStackNavigator();

function index() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Filter" component={FilterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default index;
