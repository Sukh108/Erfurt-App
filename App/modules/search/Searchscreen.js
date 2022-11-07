/**
 *
 * @format
 */
import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import List from '../../components/list/List';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function Searchscreen({navigation}) {
  const [selected, setSelected] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const Dummydata = [];
  const businesses = useSelector(state =>
    Object.values(state.businessReducer.business[0].payload),
  );
  for (let index = 0; index < businesses.length; index++) {
    let nameA = businesses[index].category;

    if (nameA != undefined) {
      Dummydata.push(businesses[index]);
    }
  }
  const [data, setData] = useState(Dummydata);

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

          // setData(
          //   Dummydata.filter(it => {
          //     // console.log(it.name.includes(value));
          //     return it.name.includes(value);
          //   }),
          // );
        }}
      />
      {Dummydata.length == 0 && (
        <ActivityIndicator size="large" color="black" />
      )}
      <FlatList
        data={
          searchValue == ''
            ? data
            : Dummydata.filter(item => {
                return item.name.includes(searchValue);
              })
        }
        renderItem={({item}) => (
          <List
            onPress={() => {
              navigation.navigate('Detail', {data: item});
            }}
            item={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Searchscreen;
