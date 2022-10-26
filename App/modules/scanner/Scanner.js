/**
 *
 * @format
 */
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
function Scanner(props) {
  const [selected, setSelected] = useState('name');
  const [scanned, setScanned] = useState(false);

  return (
    <View>
      {!scanned && (
        <Header
          onChangeFilterstate={value => {
            setSelected(value);
          }}
        />
      )}
      {scanned && (
        <View style={{width: '100%', height: 60, backgroundColor: 'yellow'}}>
          <Text>scan Success</Text>
        </View>
      )}
      <View style={styles.container}>
        <Text style={styles.centerText}>scan the QR code.</Text>

        <View style={styles.cameraview}>
          <QRCodeScanner
            onRead={() => {
              setScanned(true);
            }}
            flashMode={RNCamera.Constants.FlashMode.torch}
            cameraStyle={styles.camera}
          />
        </View>
      </View>
    </View>
  );
}

export default Scanner;
