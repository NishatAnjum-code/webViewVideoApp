import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import VideoPlayerScreen from '../screens/VideoPlayerScreen'
import WebViewScreen from '../screens/WebViewScreen'


export type RootStackParams={
    WebWiew_Notification_Screen: undefined,
    VideoPlayer_Screen: {
    videoUrl?: string,
    }
    
}
export default function AppStackNavigation() {

  const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name='WebWiew_Notification_Screen' component={WebViewScreen}></Stack.Screen>
      <Stack.Screen name='VideoPlayer_Screen' component={VideoPlayerScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})