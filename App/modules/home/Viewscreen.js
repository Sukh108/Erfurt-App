/**
 *
 * @format
 */
import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import img from '../../constants/Image/Img';
import Header from '../../components/header/Header';
import {icon} from '../../constants/categoryicons/icon';

function Viewscreen({navigation}) {
  const Render = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Listing');
        }}
        style={styles.categoryicon}>
        <Image source={item.item.path} style={styles.categoryimage} />
      </TouchableOpacity>
    );
  };
  const ListHeader = () => {
    return (
      <>
        <Image source={img.logo.toString()} style={styles.image} />
        <View style={styles.bottomcontainer}>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
      </>
    );
  };
  return (
    <View style={styles.headcontainer}>
      <Header
        back={false}
        filter={false}
        onChangeFilterstate={value => {
          console.log(value);
        }}
      />
      <FlatList
        data={icon}
        numColumns={4}
        renderItem={({item}) => <Render item={item} />}
        keyExtractor={item => item.index}
        ListHeaderComponent={<ListHeader />}
        style={styles.body}
      />
    </View>
  );
}

export default Viewscreen;
