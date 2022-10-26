/**
 *
 * @format
 */
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../../../components/header/Header';
import styles from './styles';
function DetailScreen({navigation, route}) {
  const [selected, setSelected] = useState('name');
  const {data} = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <Header
        back={true}
        fav={true}
        item={data}
        onPress={() => {
          navigation.goBack();
        }}
        onChangeFilterstate={value => {
          setSelected(value);
        }}
      />
      <Image source={data.image} style={styles.image} />
      <View style={styles.bottomContainer}>
        <Text style={styles.headerTextStyle}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </Text>
      </View>
    </View>
  );
}

export default DetailScreen;
