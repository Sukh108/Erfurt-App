/**
 *
 * @format
 */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Geolocation from 'react-native-geolocation-service';
import * as geolib from 'geolib';
import {useState} from 'react';

function List({item, onPress}) {
  var [distances, setDistances] = useState([]);
  let lat = item.officeLocation.split(',');

  Geolocation.getCurrentPosition(position => {
    setDistances(
      geolib.getDistance(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        {
          latitude: lat[0],
          longitude: lat[1],
        },
      ),
    );
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.flatcontainer}>
        <Text style={styles.distance}>{(distances / 1000).toFixed(2)} km</Text>
        <View style={styles.flatview}>
          <Image source={{uri: item.logo}} style={styles.flatimage} />
          <View style={styles.flatdataview}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
              {item.name}
            </Text>
            <View style={styles.descriptionview}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.description}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    </TouchableOpacity>
  );
}

export default List;
