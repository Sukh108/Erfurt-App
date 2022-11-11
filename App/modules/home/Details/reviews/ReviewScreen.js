/**
 *
 * @format
 */
import React from 'react';
import {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import img from '../../../../constants/Image/Img';
import styles from './styles';
import database from '@react-native-firebase/database';
import {useState} from 'react';

import {useSelector} from 'react-redux';
import {AirbnbRating} from 'react-native-ratings';
import Colors from '../../../../styles/Colors';
import {element} from 'prop-types';

function ReviewScreen({navigation, route}) {
  const {name} = route.params;
  const [reviews, setReviews] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  const [comfocused, setComFocused] = useState(false);
  const [Name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [rating, setRating] = useState(1);
  var businessname = '';

  const business = useSelector(
    state => state.businessReducer.business[0].payload,
  );
  useEffect(() => {
    database()
      .ref('/reviews/')
      .on('value', snapshot => {
        setReviews(snapshot.val());
      });
  }, []);
  for (const key in business) {
    if (business[key].name == name) {
      businessname = key;
    }
  }
  const senddata = () => {
    setModalVisible(false);
    setFocused(false);

    const newReference = database().ref('/reviews').push();
    newReference
      .set({
        author: Name,
        business: businessname,
        comment: comments,
        date: Date.now(),
        rate: rating,
      })
      .then(() => console.log('Data updated.'));

    console.log(Date.now());
  };
  const reviewArray = [];
  for (const key in reviews) {
    const data = business[reviews[key].business];
    if (data != undefined) {
      if (data.name == name) {
        reviewArray.push(reviews[key]);
      }
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.image1}>
          <Image source={img.back} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.text}>Bewertenungen</Text>
        <TouchableOpacity
          onPress={() => {
            setName('');
            setComments('');
            setModalVisible(true);
          }}
          style={styles.image2}>
          <Image source={img.plus} style={styles.img} />
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modelContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.cancelview}
              onPress={() => {
                setModalVisible(false);
                setFocused(false);
              }}>
              <Text style={styles.cancel}>Abbruch</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Kommentar hinzufugen</Text>
          </View>
          <Text
            style={{
              color: focused ? Colors.black : Colors.silvergrey,
              top: focused ? 0 : 28,
              fontSize: focused ? 10 : 14,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Name
          </Text>
          <TextInput
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            value={Name}
            onChangeText={value => {
              setName(value);
            }}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: focused ? Colors.black : Colors.silvergrey,
            }}
          />
          <Text
            style={{
              color: comfocused ? Colors.black : Colors.silvergrey,
              top: comfocused ? 0 : 28,
              fontSize: comfocused ? 10 : 14,
              marginLeft: 10,
              marginTop: 50,
            }}>
            Kommentar
          </Text>
          <TextInput
            onFocus={() => {
              setComFocused(true);
            }}
            onBlur={() => {
              setComFocused(false);
            }}
            value={comments}
            onChangeText={value => {
              setComments(value);
            }}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: comfocused ? Colors.black : Colors.silvergrey,
            }}
          />
          <View style={styles.Bewertenungen}>
            <Text>Bewertenungen</Text>
            <View>
              <AirbnbRating
                count={5}
                defaultRating={1}
                showRating={false}
                isDisabled={false}
                size={20}
                selectedColor="black"
                onFinishRating={rating => {
                  setRating(rating);
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              Name == '' || comments == '' ? console.log('') : senddata();
            }}
            style={[
              styles.button,
              {
                backgroundColor:
                  Name == '' || comments == ''
                    ? Colors.silvergrey
                    : Colors.primery,
              },
            ]}>
            <Text style={styles.buttontext}>ABSENDEN</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {reviewArray.length == 0 && (
        <View style={styles.blank}>
          <Image source={img.blankimage} />
        </View>
      )}
      <FlatList
        data={reviewArray}
        renderItem={({item}) => {
          const monthNames = [
            '',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
          ];
          const date = new Date(item.date);
          const dateFormat = date.getDate();
          const month = monthNames[date.getMonth()];
          const year = date.getFullYear();
          return (
            <>
              <View style={styles.list}>
                <View style={styles.rowView}>
                  <Text style={styles.author}>{item.author}</Text>
                  <Text style={styles.date}>
                    {dateFormat + '-' + month + '-' + year}
                  </Text>
                </View>
                <Text style={styles.comment}>{item.comment}</Text>
                <AirbnbRating
                  count={5}
                  defaultRating={item.rate}
                  showRating={false}
                  isDisabled={true}
                  size={20}
                  selectedColor="black"
                  starContainerStyle={{alignSelf: 'flex-end'}}
                />
                <View style={styles.line}></View>
              </View>
            </>
          );
        }}
        keyExtractor={item => item.index}
      />
    </>
  );
}

export default ReviewScreen;
