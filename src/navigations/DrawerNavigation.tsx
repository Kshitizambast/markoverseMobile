import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import type { RootStateParamList } from './RootStateParamList'
import BottomTabNavigator from './BottomTabNavigator'
import SideMenu from '../screens/sideMenu/SideMenu'

const Drawer = createDrawerNavigator<RootStateParamList>()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <SideMenu {...props} />}
    >
        <Drawer.Screen name='Home' component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation