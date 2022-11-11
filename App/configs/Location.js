/**
 *
 * @format
 */
import {PermissionsAndroid} from 'react-native';

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'app is taking location permission',
      },
    );
    return granted;
  } catch (e) {
    console.log(e);
  }
}
