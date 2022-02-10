import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import type { RootStateParamList } from './RootStateParamList'
import BottomTabNavigator from './BottomTabNavigator'
import SideMenu from '../screens/sideMenu/SideMenu'
import Header from '../common/Header'

const Drawer = createDrawerNavigator<RootStateParamList>()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <SideMenu {...props} />}
        screenOptions={{
            header: (props) => {
                return <Header title='' {...props} />
            },
        }}
    >
        <Drawer.Screen name='Home' component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation