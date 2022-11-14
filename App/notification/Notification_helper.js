import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import img from '../constants/Image/Img';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   const authStatus = await firebase.messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}
const GetFCMToken = async () => {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log(fcmtoken, 'old token');
  if (!fcmtoken) {
    try {
      let fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log(fcmtoken);
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
      }
    } catch (error) {
      //   console.log(error);
    }
  }
};
export const NotificationListener = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
  messaging().onMessage(async remoteMessage => {
    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: 'test-channel',
      title: remoteMessage.notification.title,
      message: remoteMessage.notification?.body,
      largeIcon: img.logo,
      largeIconUrl: `${remoteMessage.notification.android.imageUrl}`,
      smallIcon: img.logo,

      color: 'red',
    });
  });
};
