import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import type { RootStateParamList } from './RootStateParamList'
import StackNavigator from './StackNavigator' 

const Tab = createBottomTabNavigator()

const BottomTabNavigator : React.FC = () => {
  return (
   <Tab.Navigator>
       <Tab.Screen name="Stack" component={StackNavigator} />
   </Tab.Navigator>
  )
}

export default BottomTabNavigator