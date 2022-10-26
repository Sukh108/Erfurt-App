/**
 *
 * @format
 */
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import * as geolib from 'geolib';
export async function requestLocationPermission() {
  console.log('hello');
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'app is taking location permission',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('got permit');
      Geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          console.log(
            geolib.getDistance(
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
              {
                latitude: 5123.414,
                longitude: 65.15214,
              },
            ),
          );
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      console.log('eror');
    }
  } catch (e) {
    console.log(e);
  }
}
