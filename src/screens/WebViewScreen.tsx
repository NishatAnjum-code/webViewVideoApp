import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as Notifications from 'expo-notifications'
import React, { useEffect } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import AppButton from '../components/AppButton'
import { RootStackParams } from '../navigations/AppStackNavigation'

type WebViewScreenProp= NativeStackScreenProps<RootStackParams, 'WebWiew_Notification_Screen'>

//handles notification behaviour when show
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

  const hasLoaded = React.useRef(false); //to avoide sending duplicate notifications

  useEffect(()=>{
  requestPermission(); 
  androidChannel();
 

  },[])

const requestPermission = async()=>{
  await Notifications.requestPermissionsAsync();
 
} //ask for accessing permission from the user

const androidChannel = async()=>{
if (Platform.OS === 'android'){
  await Notifications.setNotificationChannelAsync('default', {
    name: 'Default',
    importance: Notifications.AndroidImportance.MAX,
    sound: 'default', 

  })
}
} // android notification channel

const sendNotification = async(title?: string, body?: string, notiDelay?: number)=>{
 await Notifications.scheduleNotificationAsync({
  content: {title, body},
  trigger: {
  type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
  seconds: notiDelay ?? 3,

} as Notifications.NotificationTriggerInput,
})
  } // notification with 3-5 seconds delay 

  return (
    <View style={styles.container}>
    <WebView source={{uri: 'https://reactnative.dev'}} style={{flex: 1}} 
    onLoadEnd={()=>{
      if(!hasLoaded.current){
        hasLoaded.current=true;
      sendNotification('Loaded', 'Website finished loading')

      }

    }
      }/>
    <View style={{gap: 5, justifyContent: 'center', alignItems: 'center'}}>
    <AppButton textStyle={styles.button} title='Notification 1' onPress={()=>sendNotification('Notification 1','Notification Delay with 3 seconds', 3)}></AppButton>
    <AppButton textStyle={styles.button} title='Notification 2' onPress={()=>sendNotification('Notification 2','Notification Delay with 5 seconds', 5)}></AppButton>
    <AppButton textStyle={styles.button}title='Video Player Screen' onPress={()=>navigation.navigate('VideoPlayer_Screen', {videoUrl: ''})}></AppButton>

    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6F9'
    },

 

    button:{
      fontSize: 15,
      fontWeight: 400,
      color: '#fff',
      textAlign: 'center',
    

    }
})