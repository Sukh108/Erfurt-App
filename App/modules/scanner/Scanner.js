/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Linking,
  ActivityIndicator,
  Alert,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/header/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
function Scanner({navigation}) {
  const [scanned, setScanned] = useState(false);
  const [auth, setAuth] = useState([]);
  const [point, setpoints] = useState('0');
  const [message, setMessage] = useState('');
  const [loyaltycard, setLoyalitycard] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (scanned) {
      setTimeout(change, 5000);
    }
  }, [scanned]);
  useEffect(() => {
    database()
      .ref('/authQR')
      .on('value', snapshot => {
        setAuth(snapshot.val());
      });
    storeData(point);
  }, [point]);
  const business = useSelector(
    state => state.businessReducer.business[0].payload,
  );
  const getData = async () => {
    const points = await AsyncStorage.getItem('points');
    setpoints(points);
    // value previously stored
  };

  const storeData = async value => {
    await AsyncStorage.setItem('points', value);
  };
  const change = () => {
    setScanned(false);
  };
  const onSucess = e => {
    if (auth[e] == undefined) {
      setScanned(true);
      setMessage('unguiltiger Code');
    } else {
      if (auth[e].status == 0) {
        getData();
        let points = Number(point) + 10;
        storeData(points.toString());
        database().ref(`/authQR/${e}`).update({
          status: 1,
        });
        getData();
        console.log('points', points);
        setModalVisible(true);

        setLoyalitycard(business[auth[e].businessID].loyaltycard);
      }
      if (auth[e].status == 1) {
        Alert.alert('Alert', 'the code is already used', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    }
  };
  return (
    <View>
      {!scanned && (
        <Header
          onChangeFilterstate={value => {
            console.log(value);
          }}
        />
      )}
      {scanned && (
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{message}</Text>
        </View>
      )}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('Home');
            }}>
            <Image source={{uri: loyaltycard}} style={styles.modalImage} />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.centerText}>
          Hier konen Sie QR-Codes der Erfurt-App Bonuskarten scannen.
        </Text>

        {!scanned && (
          <View style={styles.cameraview}>
            <QRCodeScanner
              onRead={e => {
                onSucess(e.data);
              }}
              reactivate={true}
              flashMode={RNCamera.Constants.FlashMode.off}
              cameraStyle={styles.camera}
              cameraContainerStyle={styles.cameracontainer}
            />
          </View>
        )}
        {scanned && (
          <View style={styles.cameraloadview}>
            <ActivityIndicator size="large" color="black" style={{}} />
          </View>
        )}
        <Text style={styles.bottomText}>
          Erhaltlich sind diese bei teilnehmenden Partern der Erfurt-App
        </Text>
      </View>
    </View>
  );
}

export default Scanner;
