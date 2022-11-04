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
    width: '30@ms',
    height: '30@ms',
    marginRight: '70@ms',
  },
  image2: {
    width: '30@ms',
    height: '30@ms',
    marginLeft: '80@ms',
  },
});
