import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import type { RootStateParamList } from './RootStateParamList'
import StackNavigator from './StackNavigator' 
import Profile from '../screens/profile/Profile'
import Settings from '../screens/settings/Settings'
import Colors from '../constants/Colors'

import type { TDimensions } from '../types/types'

const Tab = createBottomTabNavigator()


const FONT_SIZE: number = wp('2.8%')
const ICON_FONT_SIZE: number = wp('5%')
const BORDERED_WIDTH: number = Math.floor(wp('14.3%'))
const BORDERED_HEIGHT: number = Math.floor(wp('14.3%'))
const { width, height }: TDimensions  = Dimensions.get('window')

const BottomTabNavigator : React.FC = () => {
  return (
   <Tab.Navigator
    initialRouteName='Stack'
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: Colors.black,
            height: hp('10%'),
            //position: 'relative'
          }
    }}
   >
       <Tab.Screen name="Stack" component={StackNavigator}  />
       <Tab.Screen name="Profile" component={Profile}  />
       <Tab.Screen name="Settings" component={Settings}  />
   </Tab.Navigator>
  )
}

export default BottomTabNavigator