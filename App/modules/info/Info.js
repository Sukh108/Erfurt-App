/**
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Text, ScrollView, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {useSelector} from 'react-redux';
import Header from '../../components/header/Header';
import styles from './styles';
function Info(props) {
  const [selected, setSelected] = useState('name');
  const info = useSelector(state => state.InfoReducer.info[0].payload);

  const source = {
    html: info,
  };
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Header
        onChangeFilterstate={value => {
          setSelected(value);
        }}
      />
      <ScrollView style={styles.view}>
        <RenderHTML
          source={source}
          contentWidth={width}
          tagsStyles={{body: {textAlign: 'justify'}}}
        />
      </ScrollView>
    </View>
  );
}

export default Info;
