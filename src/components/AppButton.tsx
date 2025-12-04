import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type AppButtonProp={
containerStyle?: ViewStyle;
textStyle?: TextStyle;
title?: string;
onPress?: ()=>void;
}

export default function AppButton({containerStyle, textStyle, title, onPress}: AppButtonProp) {
  return (
    <TouchableOpacity style={[styles.box, containerStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderRadius: 8,
    },

    text: {
        fontSize: 10,
        fontWeight: 300,
        alignSelf: 'center',
    }
})