/**
 *
 * @format
 */

import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import List from '../../components/list/List';
function Favorite({navigation}) {
  const [selected, setSelected] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const data = useSelector(state => state.favReducer.favoritedata);

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
          setSearchValue(value);
        }}
      />
      <FlatList
        data={
          searchValue == ''
            ? data
            : data.filter(item => {
                return item.payload.name.includes(searchValue);
              })
        }
        renderItem={item => (
          <List
            onPress={() => {
              navigation.navigate('Detail', {
                data: item,
              });
            }}
            item={item.item.payload}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Favorite;
