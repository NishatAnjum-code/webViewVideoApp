import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

export default function VideoPlayerScreen() {

  const hclPlayer = useVideoPlayer('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');

  return (
    <View style={styles.container}>
      <Text>VideoPlayer</Text>
      <VideoView
      style={styles.videoBox}
      player={hclPlayer} // will only work on dev build, not in expo go.
      ></VideoView> 
    <View style={{justifyContent: 'space-around', flexDirection: 'row', marginTop: 12}}>
      <AppButton textStyle={styles.button} title='Play' onPress={()=>hclPlayer.play()}></AppButton>
      <AppButton textStyle={styles.button} title='Pause' onPress={()=>hclPlayer.pause()}></AppButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
   title:{
        alignSelf: 'center',
        fontWeight: 400,
        fontSize: 15
    },

    button:{
      fontSize: 15,
      fontWeight: 400,
    },

    videoBox:{
      width: '100%',
      aspectRatio: 16/9,
      backgroundColor: '#000'
    }
})