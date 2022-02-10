import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { RootStateParamList } from './RootStateParamList'

const Stack = createNativeStackNavigator<RootStateParamList>()

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
        {/* All Home Navigation goes here */}
    </Stack.Navigator>
  )
}

export default StackNavigator