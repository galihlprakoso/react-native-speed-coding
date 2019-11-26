import React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../assets/images';
import colors from '../../../assets/colors';

const datas = [
  {
    name: 'Bill Gates',
    source: images.profile.profileGates,
  },
  {
    name: 'Mark Zuckerberg',
    source: images.profile.profileMark,
  },
  {
    name: 'Elon Musk',
    source: images.profile.profileMusk,
  },
  {
    name: 'Nadiem Makarim',
    source: images.profile.profileNadiem,
  },
  {
    name: 'Steve Jobs',
    source: images.profile.profileSteve,
  },
];

export default () => {
  const renderItem = item => (
    <LinearGradient
      colors={colors.gradients.primary}
      key={item.name}
      style={styles.itemContainer}>
      <View style={styles.itemImgWrapper}>
        <Image source={item.source} style={styles.itemImg} resizeMode="cover" />
      </View>
    </LinearGradient>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      horizontal>
      {datas.map(renderItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 8,
  },
  itemContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  itemImgWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  itemImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
