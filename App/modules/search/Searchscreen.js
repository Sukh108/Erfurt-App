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
import styles from './styles';
import Geolocation from 'react-native-geolocation-service';
import * as geolib from 'geolib';
function Searchscreen({navigation}) {
  const [position, setposition] = useState();
  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      setposition(position.coords);
    });
  }, []);
  const [selected, setSelected] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const AllBusiness = [];
  const businesses = useSelector(state =>
    Object.values(state.businessReducer.business[0].payload),
  );
  for (let index = 0; index < businesses.length; index++) {
    let nameA = businesses[index].category;

    if (nameA != undefined) {
      AllBusiness.push(businesses[index]);
    }
  }
  const [data, setData] = useState(AllBusiness);
  const getdistance = item => {
    let lat = item.split(',');
    var dist = geolib.getDistance(
      {
        latitude: position.latitude,
        longitude: position.longitude,
      },
      {
        latitude: lat[0],
        longitude: lat[1],
      },
    );
    return dist;
  };
  if (position != undefined) {
    for (i = 0; i < data.length; i++) {
      data[i]['distance'] = getdistance(data[i].officeLocation);
    }
  }
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
      {AllBusiness.length == 0 && (
        <ActivityIndicator size="large" color="black" />
      )}
      <FlatList
        data={
          searchValue == ''
            ? data
            : AllBusiness.filter(item => {
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
