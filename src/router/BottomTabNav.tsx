import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen"
import AddressScreen from "../screens/AddressScreen"
import ShoppingCartScreen from "../screens/ShoppingCartScreen"

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen component={HomeScreen} name="Home" />
            {/* <Tab.Screen component={AddressScreen} name="Address" /> */}
            {/* <Tab.Screen component={ShoppingCartScreen} name="shoppingCart" /> */}
            {/* <Tab.Screen component={HomeScreen} name="Word" /> */}

        </Tab.Navigator>
    )
}

export default BottomTabNav;
