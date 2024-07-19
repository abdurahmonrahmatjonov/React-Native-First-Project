import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar backgroundColor={'#1e3a8a'} />

      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Layout;
