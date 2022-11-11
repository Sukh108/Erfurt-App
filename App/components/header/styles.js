/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../styles/Colors';
export default styles = ScaledSheet.create({
  container: {
    height: '60@vs',
    flexDirection: 'row',
    backgroundColor: Colors.primery,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 24,
    color: Colors.white,
  },
  image1: {
    marginRight: '70@ms',
  },
  image2: {
    marginLeft: '80@ms',
  },
  img: {
    width: '30@ms',
    height: '30@ms',
  },
});
