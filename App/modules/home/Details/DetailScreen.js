/**
 *
 * @format
 */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
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
import DetailscreenComponent from '../../../components/detailscreencomponent/DetailscreenComponent';
import {useEffect} from 'react';

function DetailScreen({navigation, route}) {
  const {width} = useWindowDimensions();
  const favdata = useSelector(state => state.favReducer.favoritedata);
  const [selected, setSelected] = useState('name');

  const {data} = route.params;
  const source = {
    html: data.description,
  };
  useEffect(() => {
    checkfav();
    console.log('changed');
  }, [favdata]);

  const checkfav = () => {
    for (const i of favdata) {
      if (i.payload.name == data.name) {
        return true;
        break;
      }
    }
  };
  const rating = () => {
    if (data.rating == undefined) {
      return 0;
    } else {
      return data.rating.value;
    }
  };
  if (!data) {
    return <ActivityIndicator size="large" color="black" />;
  } else {
    return (
      <ScrollView style={styles.container}>
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
                defaultRating={rating()}
                showRating={false}
                isDisabled={true}
                size={20}
                selectedColor="white"
                starContainerStyle={{alignSelf: 'flex-start'}}
              />
            </View>
          </ImageBackground>
        </View>
        <RenderHTML
          source={source}
          contentWidth={width}
          tagsStyles={{
            body: {textAlign: 'justify', margin: 10},
            img: {alignSelf: 'baseline'},
          }}
        />
        <View style={styles.line}></View>
        {data.openhours && (
          <DetailscreenComponent
            opening={data.openhours}
            image={img.clock}
            text={'Wir haben geoffnet'}
            onPress={() => {
              navigation.navigate('OpeningTime', {
                name: data.name,
                openhours: data.openhours,
              });
            }}
          />
        )}
        <DetailscreenComponent
          image={img.navigationIcon}
          text={
            'Sie sind ' + `${data.distance}` + 'km entfernt NAvigation starten'
          }
          location={data.officeLocation}
        />
        <DetailscreenComponent
          image={img.messageIcon}
          text={'Bewertenungen lesen Bewertung hinzufugen'}
          onPress={() => {
            navigation.navigate('Review', {
              name: data.name,
            });
          }}
        />
        <DetailscreenComponent
          image={
            checkfav() == true ? img.favoriteBlackIcon : img.favoriteoutlineIcon
          }
          text={'Zu Favoriten hinzufugen'}
          fav={checkfav() == true ? true : false}
          data={data}
        />
        {data.homePage && (
          <DetailscreenComponent
            image={img.home}
            text={'HomePage'}
            HomepageLink={data.homePage}
          />
        )}
        {data.facebookPage && (
          <DetailscreenComponent
            image={img.facebook}
            text={'Facebook'}
            fbpageLink={data.facebookPage}
          />
        )}
      </ScrollView>
    );
  }
}

export default DetailScreen;
