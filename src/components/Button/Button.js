import React from 'react';
import {TouchableOpacity, ActivityIndicator, Text} from 'react-native';

export default function Button({loading, onPress, text, bgColor, loaderColor}) {
  return (
    <TouchableOpacity
      disabled={loading ? loading : false}
      onPress={onPress}
      className={` ${
        bgColor ? bgColor : 'bg-blue-900'
      } rounded-lg p-3 text-white drop-shadow-xl text-center`}>
      {loading ? (
        <ActivityIndicator color={loaderColor ? loaderColor : '#FFFFFF'} />
      ) : (
        <Text className="text-center text-white">{text}</Text>
      )}
    </TouchableOpacity>
  );
}
