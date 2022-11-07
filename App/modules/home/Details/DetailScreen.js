/**
 *
 * @format
 */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Header from '../../../components/header/Header';
import styles from './styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import RenderHTML from 'react-native-render-html';
import {useSelector} from 'react-redux';
import img from '../../../constants/Image/Img';

function DetailScreen({navigation, route}) {
  const {width} = useWindowDimensions();
  const favdata = useSelector(state => state.favReducer.favoritedata);
  const [selected, setSelected] = useState('name');
  const [isfav, setIsfav] = useState('');
  const {data} = route.params;
  const reviewdata = useSelector(state => state);
  console.log(reviewdata);
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
  if (!data) {
    return <ActivityIndicator size="large" color="black" />;
  } else {
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

              <AirbnbRating
                count={5}
                defaultRating={3}
                showRating={false}
                isDisabled={true}
                size={20}
                selectedColor="white"
                starContainerStyle={{alignSelf: 'flex-start'}}
              />
            </View>
          </ImageBackground>
        </View>
        <RenderHTML source={source} contentWidth={width} />
        <View style={styles.line}></View>
      </View>
    );
  }
}

export default DetailScreen;
