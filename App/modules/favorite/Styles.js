/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../styles/Colors';
export default styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  blank: {
    backgroundColor: Colors.white,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
