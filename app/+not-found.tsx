import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const NotFound = () => {
  return (
    <Stack.Screen options={{ title: 'Error' }}>
      <View>
        <Text>Not found screen</Text>
      </View>
    </Stack.Screen>
  )
}

export default NotFound
