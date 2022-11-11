/**
 *
 * @format
 */
import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

function List({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.flatcontainer}>
        <Text style={styles.distance}>
          {(item.distance / 1000).toFixed(2)} km
        </Text>
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
