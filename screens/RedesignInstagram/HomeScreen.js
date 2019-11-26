import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeTopNav from './components/HomeTopNav';
import colors from '../../assets/colors';
import ContentContainer from './components/ContentContainer';
import BottomNavigation from './components/BottomNavigation';

export default () => {
  return (
    <View style={styles.container}>
      <HomeTopNav />
      <ContentContainer />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background.lightGray,
  },
});
