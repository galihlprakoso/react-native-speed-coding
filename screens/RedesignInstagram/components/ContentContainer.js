import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import images from '../../../assets/images';
import IconButton from './IconButton';
import colors from '../../../assets/colors';

const {width} = Dimensions.get('window');

const datas = [
  {
    username: 'billgates',
    profile: images.profile.profileGates,
    image: images.images.pic1,
    likes: 1242,
    comments: 24,
  },
  {
    username: 'markzuckerberg',
    profile: images.profile.profileMark,
    image: images.images.pic2,
    likes: 2402,
    comments: 31,
  },
  {
    username: 'elonmusk',
    profile: images.profile.profileMusk,
    image: images.images.pic3,
    likes: 3210,
    comments: 32,
  },
  {
    username: 'nadiem',
    profile: images.profile.profileNadiem,
    image: images.images.pic4,
    likes: 4039,
    comments: 45,
  },
  {
    username: 'stevejobs',
    profile: images.profile.profileSteve,
    image: images.images.pic5,
    likes: 5212,
    comments: 90,
  },
];

export default () => {
  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <View style={styles.postTopWrapper}>
        <View style={styles.postAuthorWrapper}>
          <Image
            source={item.profile}
            resizeMode="cover"
            style={styles.postProfileImg}
          />
          <Text style={styles.postUsername}>{item.username}</Text>
        </View>

        <IconButton
          style={styles.postMoreIcon}
          name="ios-more"
          size={24}
          color={colors.gray}
        />
      </View>

      <Image source={item.image} resizeMode="center" style={styles.postImage} />

      <View style={styles.postBottomWrapper}>
        <View style={styles.postBottomLeftWrapper}>
          <View style={styles.postDetailContainers}>
            <IconButton
              style={styles.postDetailIcon}
              name="ios-heart"
              size={24}
              color={colors.maroon}
            />
            <Text style={styles.postDetailNumbers}>{item.likes}</Text>
          </View>
          <View style={styles.postDetailContainers}>
            <IconButton
              style={styles.postDetailIcon}
              name="ios-chatbubbles"
              size={24}
              color="black"
            />
            <Text style={styles.postDetailNumbers}>{item.likes}</Text>
          </View>
        </View>

        <IconButton name="ios-bookmark" size={24} color="black" />
      </View>
    </View>
  );
  return (
    <FlatList
      data={datas}
      keyExtractor={item => item.username}
      renderItem={renderItem}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: 'white',
    width: width - 16,
    marginVertical: 8,
    borderRadius: 18,
  },
  postTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postAuthorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
  },
  postUsername: {
    fontWeight: '600',
  },
  postMoreIcon: {
    transform: [{rotate: '90deg'}],
    marginRight: 8,
  },
  postImage: {
    width: width - 32,
    height: 400,
    marginHorizontal: 8,
    borderRadius: 18,
  },
  postBottomWrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 8,
  },
  postBottomLeftWrapper: {
    flexDirection: 'row',
  },
  postDetailContainers: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postDetailIcon: {
    marginRight: 8,
  },
  postDetailNumbers: {
    fontSize: 12,
  },
});
