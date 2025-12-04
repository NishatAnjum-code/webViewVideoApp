import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as Notifications from 'expo-notifications'
import React, { useEffect } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import AppButton from '../components/AppButton'
import { RootStackParams } from '../navigations/AppStackNavigation'

type WebViewScreenProp= NativeStackScreenProps<RootStackParams, 'webview'>


Notifications.setNotificationHandler({
  handleNotification: async()=>{
    return{
        shouldSetBadge: true,
        shouldPlaySound: true,
        shouldShowList: true,
        shouldShowBanner: true,
    }
  }
})

export default function WebViewScreen({navigation}: WebViewScreenProp) {


  useEffect(()=>{
  requestPermission();
  androidChannel();
    
  },[])


const requestPermission = async()=>{
  await Notifications.requestPermissionsAsync();
}

const androidChannel = async()=>{
if (Platform.OS === 'android'){
  await Notifications.setNotificationChannelAsync('default', {
    name: 'Default',
    importance: Notifications.AndroidImportance.HIGH,
  })
}
} 

const sendNotification = async(title: string, body: string)=>{
 await Notifications.scheduleNotificationAsync({
  content: {title, body},
  trigger: {
    seconds: 3,
} as Notifications.NotificationTriggerInput,
})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WebView + Notification</Text>
    <WebView source={{uri: 'https://expo.dev'}} style={{flex: 1}}></WebView>
    <View style={{gap: 10, top: 10, justifyContent: 'center', alignItems: 'center'}}>
      <AppButton textStyle={styles.button} title='Notification 1' onPress={()=>sendNotification('Notification 1','Hi...This is Notification 1')}></AppButton>
    <AppButton textStyle={styles.button} title='Notification 2' onPress={()=>sendNotification('Notification 2','Hi...This is Notification 2')}></AppButton>
    <AppButton textStyle={styles.button}title='Video Player Screen' onPress={()=>navigation.navigate('videplayer', {videoUrl: ''})}></AppButton>

    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        padding: 15,
    },

    title:{
        alignSelf: 'center',
        fontWeight: 400,
        fontSize: 15
    },

    button:{
      marginVertical: 10,
      fontSize: 15,
      fontWeight: 400,
    

    }
})