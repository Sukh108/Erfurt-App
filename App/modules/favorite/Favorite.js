/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import List from '../../components/list/List';
function Favorite({navigation}) {
  const [selected, setSelected] = useState('name');
  const data = useSelector(state => state.favoritedata);

  const [mydata, setData] = useState(data);

  return (
    <View style={styles.container}>
      <Header
        filter={true}
        onChangeFilterstate={value => {
          setSelected(value);
        }}
      />
      <Search
        onChange={value => {
          setData(
            data.filter(it => {
              return it.payload.title.includes(value);
            }),
          );
        }}
      />
      <FlatList
        data={mydata}
        renderItem={({item}) => (
          <List
            onPress={() => {
              navigation.navigate('Detail', {data: item});
            }}
            item={item.payload}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Favorite;
