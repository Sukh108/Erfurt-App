/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Viewscreen from '../modules/home/Viewscreen';
import {Image, Text} from 'react-native';
import Colors from '../styles/Colors';
import Info from '../modules/info/Info';
import Scanner from '../modules/scanner/Scanner';
import styles from './style';
import Searchscreen from '../modules/search/Searchscreen';
import Favorite from '../modules/favorite/Favorite';
import img from '../constants/Image/Img';
import ListingsScreen from '../modules/home/Listings/ListingsScreen';
import DetailScreen from '../modules/home/Details/DetailScreen';
import {useDispatch} from 'react-redux';
import {
  getfromfirebase,
  getbusinessfromfirebase,
} from '../redux/actions/Action';
import {getinfofromfirebase} from '../redux/actions/Infoaction';
import OpeningTimeScreen from '../modules/home/Details/opningTime/openingTimeScreen';
import ReviewScreen from '../modules/home/Details/reviews/ReviewScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function TabNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Viewscreen} />
      <Stack.Screen name="Listing" component={ListingsScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="OpeningTime" component={OpeningTimeScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
    </Stack.Navigator>
  );
}
function Navigator(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getfromfirebase());
    dispatch(getbusinessfromfirebase());
    dispatch(getinfofromfirebase());
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let bg;
            let iconname;
            if (route.name == 'Hometab') {
              iconname = img.home.toString();
              bg = focused ? Colors.white : Colors.light;
            } else if (route.name == 'Info') {
              iconname = img.info.toString();
              bg = focused ? Colors.white : Colors.light;
            } else if (route.name == 'Search') {
              iconname = img.search.toString();
              bg = focused ? Colors.white : Colors.light;
            } else if (route.name == 'favorite') {
              iconname = img.favorite.toString();
              bg = focused ? Colors.white : Colors.light;
            } else if (route.name == 'Scanner') {
              iconname = img.scanner.toString();
              bg = focused ? Colors.white : Colors.light;
            }
            return (
              <Image
                source={iconname}
                style={[styles.tabicon, {tintColor: bg}]}
              />
            );
          },
          tabBarActiveBackgroundColor: Colors.primery,
          tabBarInactiveBackgroundColor: Colors.primery,
          headerShown: false,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Hometab" component={TabNavigator} />
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Search" component={Searchscreen} />
        <Tab.Screen name="favorite" component={Favorite} />
        <Tab.Screen name="Scanner" component={Scanner} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
