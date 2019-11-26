import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View>
        <Icon {...props} />
      </View>
    </TouchableOpacity>
  );
};
