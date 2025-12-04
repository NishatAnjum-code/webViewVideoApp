import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import VideoPlayerScreen from '../screens/VideoPlayerScreen'
import WebViewScreen from '../screens/WebViewScreen'


export type RootStackParams={
    webview: undefined,
    videplayer: {
        videoUrl?: string,
    }
    
}
export default function AppStackNavigation() {

  const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name='webview' component={WebViewScreen}></Stack.Screen>
      <Stack.Screen name='videplayer' component={VideoPlayerScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})