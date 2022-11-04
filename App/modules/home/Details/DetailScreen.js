/**
 *
 * @format
 */
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Header from '../../../components/header/Header';
import styles from './styles';
import Colors from '../../../styles/Colors';
import RenderHTML from 'react-native-render-html';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
function DetailScreen({navigation, route}) {
  const {width} = useWindowDimensions();
  const favdata = useSelector(state => state.favReducer.favoritedata);
  const [selected, setSelected] = useState('name');
  const [isfav, setIsfav] = useState('');
  const {data} = route.params;
  console.log('data:', data);
  const source = {
    html: data.description,
  };
  const checkfav = () => {
    for (const i of favdata) {
      if (i.payload.name == data.name) {
        return true;
        break;
      }
    }
  };
  return (
    <View style={styles.container}>
      <Header
        back={true}
        fav={true}
        isfav={checkfav()}
        item={data}
        onPress={() => {
          navigation.goBack();
        }}
        onChangeFilterstate={value => {
          setSelected(value);
        }}
      />
      <View style>
        <ImageBackground source={{uri: data.logo}} style={styles.headerImage}>
          <View style={styles.imageContainer}>
            <Text style={[styles.textStyle]}>{data.name}</Text>
            <Text style={styles.textStyle}>☆☆☆☆☆</Text>
          </View>
        </ImageBackground>
      </View>
      <RenderHTML source={source} contentWidth={width} />
      <View style={styles.line}></View>
    </View>
  );
}

export default DetailScreen;
