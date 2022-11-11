/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../styles/Colors';
export default styles = ScaledSheet.create({
  container: {},
  name: {
    fontSize: 22,
    color: Colors.black,
  },
  body: {
    margin: '15@ms',
  },
  text: {
    marginTop: '25@ms',
    fontSize: 16,
    color: Colors.black,
  },
  line: {
    height: '1@ms',
    backgroundColor: Colors.silvergrey,
    marginTop: '5@ms',
  },
  dayname: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  time: {
    marginTop: '5@ms',
  },
  listview: {
    marginTop: '5@ms',
  },
});
