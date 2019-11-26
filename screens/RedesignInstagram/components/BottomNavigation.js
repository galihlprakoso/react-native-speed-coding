import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import IconButton from './IconButton';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.sideWrapper}>
        <IconButton
          style={styles.icons}
          name="ios-home"
          size={32}
          color="black"
        />
        <IconButton
          style={styles.icons}
          name="ios-search"
          size={32}
          color="black"
        />
      </View>
      <View style={styles.sideWrapper}>
        <IconButton
          style={styles.icons}
          name="ios-heart"
          size={32}
          color="black"
        />
        <IconButton
          style={styles.icons}
          name="ios-person"
          size={32}
          color="black"
        />
      </View>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={() => {}}>
          <LinearGradient
            style={styles.addButton}
            colors={colors.gradients.primary}>
            <Icon name="ios-add" size={32} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    height: 65,
    bottom: 0,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sideWrapper: {
    flexDirection: 'row',
  },
  icons: {
    marginHorizontal: 24,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 32.5,
    left: width / 2 - 28,
    right: 0,
    width: 56,
    height: 56,
  },
  addButton: {
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
