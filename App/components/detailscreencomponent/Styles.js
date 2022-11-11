/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../styles/Colors';
export default styles = ScaledSheet.create({
  container: {
    marginLeft: '5@vs',
    marginTop: '5@vs',
  },
  line: {
    height: '1@ms',
    backgroundColor: Colors.silvergrey,
    marginLeft: '50@ms',
    marginTop: '10@ms',
    marginRight: '20@ms',
  },
  containerView: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: '10@ms',
  },
  text: {
    marginLeft: '25@ms',
  },
  chevron: {
    tintColor: Colors.blackColor,
    marginLeft: '40@ms',
  },
  textview: {
    width: '250@ms',
  },
  img: {
    marginTop: '3@ms',
    tintColor: Colors.black,
    height: 25,
    width: 25,
  },
});
