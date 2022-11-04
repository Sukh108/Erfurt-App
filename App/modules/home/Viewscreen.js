/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import img from '../../constants/Image/Img';
import Header from '../../components/header/Header';
import {icon} from '../../constants/categoryicons/icon';
import {useSelector} from 'react-redux';

function Viewscreen({navigation}) {
  const [categories, setCategories] = useState([]);

  const data = useSelector(state => state.categoriesreducer.categories);

  useEffect(() => {
    if (data.length !== 0) {
      setCategories(Object.values(data[0].payload));
    }
  }, [data]);
  const Render = item => {
    var name = item.item.name;
    for (let index = 0; index < icon.length; index++) {
      if (icon[index].name == name) {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Listing', {itemname: {name}});
            }}
            style={styles.categoryicon}>
            <Image source={icon[index].path} style={styles.categoryimage} />
          </TouchableOpacity>
        );
      }
    }
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
        data={categories}
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
