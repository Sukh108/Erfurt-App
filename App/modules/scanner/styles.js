/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../styles/Colors';
export default styles = ScaledSheet.create({
  container: {
    margin: '10@ms',
  },
  camera: {
    height: 250,
    width: 230,
  },
  modalView: {
    height: '100%',
    width: '100%',
    marginTop: '266@ms',
    marginLeft: '45@ms',
  },
  cameracontainer: {
    height: 311,
    width: 234,
    paddingTop: '28@ms',
    borderColor: Colors.primery,
    borderWidth: 2,
  },
  cameraview: {
    marginLeft: '50@ms',
    marginTop: '20@ms',
  },
  cameraloadview: {
    marginLeft: '50@ms',
    marginTop: '20@ms',
    height: 311,
    width: 234,
    justifyContent: 'center',
  },
  buttonTouchable: {
    marginTop: '300@ms',
    marginLeft: '150@ms',
  },
  centerText: {
    marginLeft: '50@ms',
    marginRight: '50@ms',
    marginTop: '50@ms',
    alignSelf: 'center',
    textAlign: 'justify',
    color: Colors.black,
  },
  bottomText: {
    marginLeft: '50@ms',
    marginRight: '50@ms',
    marginTop: '380@ms',
    alignSelf: 'center',
    textAlign: 'justify',
    color: Colors.black,
  },
  modalImage: {height: '75%', width: '75%', borderRadius: '10@ms'},
});
