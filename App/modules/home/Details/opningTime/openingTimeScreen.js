/**
 *
 * @format
 */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../../../components/header/Header';
import styles from './styles';

function OpeningTimeScreen({navigation, route}) {
  const {name, openhours} = route.params;
  const days = [
    'Samstag',
    'Sonnatag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnaerstag',
    'Freitag',
  ];
  return (
    <View style={styles.container}>
      <Header
        back={true}
        onPress={() => {
          navigation.goBack();
        }}
        onChangeFilterstate={value => {
          console.log(value);
        }}
      />
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>OFFNUNGSZEITEN</Text>
        <View style={styles.line}></View>
        <FlatList
          data={openhours.days}
          renderItem={({item}) => {
            var closedate = new Date(item.closeAt * 1000);
            var closehours = closedate.getHours();
            var closeminutes = closedate.getMinutes();
            var opendate = new Date(item.openAt * 1000);
            var openhours = opendate.getHours();
            var openminutes = opendate.getMinutes();
            return (
              <View style={styles.listview}>
                <Text style={styles.dayname}>{days[item.day]}</Text>
                <Text style={styles.time}>
                  {openhours +
                    ':' +
                    openminutes +
                    '-' +
                    closehours +
                    ':' +
                    closeminutes}
                </Text>
                <View style={styles.line}></View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default OpeningTimeScreen;
