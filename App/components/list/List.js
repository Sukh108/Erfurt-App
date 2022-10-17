/**
 *
 * @format
 */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
function List({item, onPress}) {
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.flatcontainer}>
        <Text style={styles.distance}>{item.distance} km</Text>
        <View style={styles.flatview}>
          <Image source={item.image} style={styles.flatimage} />
          <View style={styles.flatdataview}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.descriptionview}>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    </TouchableOpacity>
  );
}

export default List;
