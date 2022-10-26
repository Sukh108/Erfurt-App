/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../styles/Colors';
export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: '150@vs',
  },
  headerTextStyle: {
    color: 'black',
    textAlign: 'justify',
    lineHeight: '20@ms',
    // Roboto
  },
  bottomContainer: {
    padding: '20@ms',
  },
});
