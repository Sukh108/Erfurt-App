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
import Geolocation from 'react-native-geolocation-service';
import * as geolib from 'geolib';
function Favorite({navigation}) {
  const [selected, setSelected] = useState('name');
  const [distances, setDistances] = useState();
  const [searchValue, setSearchValue] = useState('');
  const data = useSelector(state => state.favReducer.favoritedata);
  const getdistance = item => {
    let lat = item.split(',');

    Geolocation.getCurrentPosition(position => {
      setDistances(position.coords);
    });

    var dist = geolib.getDistance(
      {
        latitude: distances.latitude,
        longitude: distances.longitude,
      },
      {
        latitude: lat[0],
        longitude: lat[1],
      },
    );
    return dist;
  };

  return (
    <View style={styles.container}>
      <Header
        filter={true}
        onChangeFilterstate={value => {
          if (value == 'Name') {
            data.sort((a, b) => {
              const nameA = a.payload.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.payload.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              // names must be equal
              return 0;
            });
          } else if (value == 'Distance') {
            for (i = 0; i < data.length; i++) {
              console.log(data[i]);
              data[i]['distance'] = getdistance(data[i].payload.officeLocation);
            }
            data.sort((a, b) => a.distance - b.distance);
          }
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
                data: item.item.payload,
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
