import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VideoPlayerScreen() {

  const hclPlayer = useVideoPlayer('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');

  return (
    <View style={styles.container}>
      <Text>VideoPlayer</Text>
      <VideoView
      player={hclPlayer} // will only work on dev build, not in expo go.
      ></VideoView> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})