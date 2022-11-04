/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import Styles from './Styles';

import img from '../../constants/Image/Img';
import Colors from '../../styles/Colors';

function FilterScreen({filterValue, onPress, onChangeFilter}) {
  const [selected, setSelected] = useState(filterValue);
  useEffect(() => {
    onChangeFilter(selected);
  }, [selected]);
  return (
    <View>
      <View style={Styles.header}>
        <TouchableOpacity onPress={onPress}>
          <Text style={Styles.cancellationStyle}>Cancellation</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.heading}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={Styles.cancellationStyle}>Finished</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.title}>
        <Text style={Styles.titleText}>SORT BY</Text>
      </View>
      <View>
        <View style={Styles.optionMenu}>
          <TouchableOpacity
            style={Styles.options}
            onPress={() => setSelected('Name')}>
            {/* <View style={Styles.options}> */}
            <Text
              style={[
                Styles.heading,
                selected == 'Name'
                  ? {color: Colors.primery}
                  : {color: Colors.black},
              ]}>
              Name
            </Text>
            {selected == 'Name' && (
              <Image source={img.tick} style={Styles.tickStyle} />
            )}
            {/* </View> */}
          </TouchableOpacity>
          <View style={Styles.lineStyle}></View>
          <TouchableOpacity
            style={Styles.options}
            onPress={() => setSelected('Distance')}>
            {/* <View style={Styles.options}> */}
            <Text
              style={[
                Styles.heading,
                selected == 'Distance'
                  ? {color: Colors.primery}
                  : {color: Colors.black},
              ]}>
              Distance
            </Text>
            {selected == 'Distance' && (
              <Image source={img.tick} style={Styles.tickStyle} />
            )}
            {/* </View> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FilterScreen;
