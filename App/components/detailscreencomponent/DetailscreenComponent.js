/**
 *
 * @format
 */
import React from 'react';
import {useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import open from 'react-native-open-maps';
import {useDispatch} from 'react-redux';
import img from '../../constants/Image/Img';
import {addToFavorite, removeToFavorite} from '../../redux/actions/Action';
import styles from './Styles';

function DetailscreenComponent({
  image,
  text,
  location,
  fav,
  data,
  HomepageLink,
  fbpageLink,
  onPress,
}) {
  const dispacth = useDispatch();

  const goToMaps = () => {
    if (HomepageLink != undefined) {
      Linking.openURL(HomepageLink);
    }
    if (fbpageLink != undefined) {
      Linking.openURL(fbpageLink);
    }
    if (location != undefined) {
      var loc = location.split(',');
      let latitude = Number(loc[0]);
      let longitude = Number(loc[1]);
      let position = {latitude: latitude, longitude: longitude};
      open(position);
    }
    if (fav != undefined) {
      if (fav == true) {
        dispacth(removeToFavorite(data));
      } else {
        dispacth(addToFavorite(data));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Image source={image} style={styles.img} />
        <View style={styles.textview}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <TouchableOpacity
          onPress={onPress != undefined ? onPress : () => goToMaps()}>
          <Image source={img.chevronRight} style={styles.chevron} />
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

export default DetailscreenComponent;
