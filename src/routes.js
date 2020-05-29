import React from 'react'
import {View} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './page/home/index'
import About from './page/about/index'

const Drawer = createDrawerNavigator()

export default function Routes (){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="About" component={About}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}