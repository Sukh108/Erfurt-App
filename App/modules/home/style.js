/**
 *
 * @format
 */ import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../styles/Colors';
export default styles = ScaledSheet.create({
  headcontainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: '180@vs',
    marginTop: '12@ms',
  },
  bottomcontainer: {
    marginRight: '15@ms',
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.5,
    color: Colors.lightblack,
    marginBottom: '10@ms',
    textAlign: 'justify',
  },
  categoryicon: {
    marginRight: '6@ms',
  },
  categoryimage: {
    height: '85@ms',
    width: '80@ms',
  },
  body: {
    marginLeft: '15@ms',
    marginBottom: '10@vs',
  },
});
