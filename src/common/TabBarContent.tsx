import { View, Text } from 'react-native'
import React from 'react'


interface Props {
    focused: boolean;
    title: string;
    inactiveIcon: string;
    activeIcon: string
}

const TabBarContent = () => {
  return (
    <View>
      <Text>TabBarContent</Text>
    </View>
  )
}

export default TabBarContent