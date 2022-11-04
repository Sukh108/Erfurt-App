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
  img: {
    width: '100%',
    height: '100@ms',
    resizeMode: 'stretch',
  },
  headerImage: {
    width: '100%',
    height: '200@ms',
    resizeMode: 'stretch',
    // marginLeft: '-20@ms',
    // marginRight: '-20@ms',
  },
  imageContainer: {
    backgroundColor: Colors.blackColor,
    width: '100%',
    position: 'absolute',
    bottom: '0@ms',
    left: '0@ms',
    padding: '15@ms',
    paddingTop: '10@ms',
  },
  textStyle: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: '18@ms',
    opacity: 1,
  },
  line: {
    height: '1@vs',
    backgroundColor: Colors.silvergrey,
    margin: '5@ms',
  },
});
