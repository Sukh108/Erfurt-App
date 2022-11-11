/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import Header from '../../../components/header/Header';
import List from '../../../components/list/List';
import Search from '../../../components/search/Search';
import Geolocation from 'react-native-geolocation-service';
import * as geolib from 'geolib';
import styles from './styles';
import {requestLocationPermission} from '../../../configs/Location';
import {useSelector} from 'react-redux';
import RenderHTML from 'react-native-render-html';

function ListingsScreen({navigation, route}) {
  const [position, setposition] = useState();
  const name = route.params;
  const itemname = name.itemname.name;
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('name');

  let Dummydata = [];
  const [data, setData] = useState(Dummydata);
  const category = useSelector(state =>
    Object.values(state.categoriesreducer.categories[0].payload),
  );
  const businesses = useSelector(state =>
    Object.values(state.businessReducer.business[0].payload),
  );
  for (let index = 0; index < businesses.length; index++) {
    let nameA = businesses[index].category;

    if (nameA != undefined) {
      if (nameA.includes(itemname)) {
        Dummydata.push(businesses[index]);
      }
    }
  }

  useEffect(() => {
    setCategories(category);
    setData(
      Dummydata.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }),
    );
    Geolocation.getCurrentPosition(position => {
      setposition(position.coords);
    });
  }, []);
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
  for (let index = 0; index < categories.length; index++) {
    if (categories[index].name == itemname) {
      const source = {
        html: categories[index].text,
      };
      const {width} = useWindowDimensions;

      return (
        <View style={styles.container}>
          <Header
            back={true}
            filter={true}
            onPress={() => {
              navigation.goBack();
            }}
            filterValue={filterValue}
            onChangeFilterstate={value => {
              setFilterValue(value);
              if (value == 'Name') {
                setData(
                  Dummydata.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                  }),
                );
              } else if (value == 'Distance') {
                data.sort((a, b) => a.distance - b.distance);
              }
            }}
          />
          {Dummydata.length == 0 && categories.length == 0 && (
            <ActivityIndicator size="large" color="black" />
          )}
          <ScrollView>
            <Image
              source={{uri: categories[index].picture}}
              style={styles.Image}
            />
            <View style={styles.headtextview}>
              <View style={{justifyContent: 'center'}}>
                <RenderHTML
                  source={source}
                  contentWidth={width}
                  baseStyle={{textAlign: 'justify'}}
                />
              </View>
            </View>
            <Search
              onChange={value => {
                setSearchValue(value);
              }}
            />
            <View>
              <FlatList
                data={
                  searchValue == ''
                    ? data
                    : data.filter(item => {
                        return item.name.includes(searchValue);
                      })
                }
                renderItem={({item}) => (
                  <List
                    onPress={() => {
                      navigation.navigate('Detail', {
                        data: item,
                      });
                    }}
                    item={item}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default ListingsScreen;
