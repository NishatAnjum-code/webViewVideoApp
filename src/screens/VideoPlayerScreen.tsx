import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

export default function VideoPlayerScreen() {

  const hclPlayer = useVideoPlayer('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');


  return (
    <View style={styles.container}>

      <Text style={styles.title}>You can Play and Pause the Video as you like! :D</Text>
      <View style={styles.videoContainer}>
      <VideoView
      style={styles.videoBox}
      player={hclPlayer}
      contentFit='cover'
      allowsFullscreen
      allowsPictureInPicture
      /> 
      </View>
    <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 20, justifyContent: 'space-between', width: '100%'}}>
      <AppButton textStyle={styles.button} title='Play' onPress={()=>hclPlayer.play()}></AppButton>
      <AppButton textStyle={styles.button} title='Pause' onPress={()=>hclPlayer.pause()}></AppButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6F9',
    paddingHorizontal: 10,
   
  },
   title:{
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 15,
        color: '#2C6E49',
        marginBottom: 16, 

    },

    button:{
      fontSize: 15,
      fontWeight: 500,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff'
    
      
    },

    videoBox:{
      width: '100%',
      aspectRatio: 16/9,
      borderWidth: 2,
      borderColor: '#2C6E49',
      borderRadius: 10,
      margin: 0,
      padding: 0,
      overflow: 'hidden',

    },

    videoContainer:{
      width: '100%',
      overflow: 'hidden',
      margin: 0,
      padding: 0,

    }
})