import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"

import BottomTabNav from './BottomTabNav'
import HomeScreen from "../screens/HomeScreen"

const Root = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen component={BottomTabNav} name="HomeTabs" />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Router
