import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { RootStateParamList } from './RootStateParamList'
import Landing from '../screens/landing/Landing'

const Stack = createNativeStackNavigator()

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
        initialRouteName='Landing'
        screenOptions={{
            headerShown: false
        }}
    >
        {/* All Home Navigation goes here */}
        <Stack.Screen name="Landing"  component={Landing}/>
    </Stack.Navigator>
  )
}

export default StackNavigator