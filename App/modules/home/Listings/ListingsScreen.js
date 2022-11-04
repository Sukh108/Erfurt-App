/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Header from '../../../components/header/Header';
import List from '../../../components/list/List';
import Search from '../../../components/search/Search';

import styles from './styles';
import {requestLocationPermission} from '../../../configs/Location';
import {useSelector} from 'react-redux';
import RenderHTML from 'react-native-render-html';

function ListingsScreen({navigation, route}) {
  const name = route.params;
  const itemname = name.itemname.name;
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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
  // console.log('businesses', businesses);

  useEffect(() => {
    requestLocationPermission();
    setCategories(category);
    setData(
      Dummydata.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }),
    );
  }, []);

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
            onChangeFilterstate={value => {
              if (value == 'Name') {
                setData(
                  Dummydata.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }

                    // names must be equal
                    return 0;
                  }),
                );
              } else if (value == 'Distance') {
                setData(data.sort((a, b) => a.distance - b.distance));
              }
            }}
          />
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
