/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../styles/Colors';
export default styles = ScaledSheet.create({
  flatview: {
    flexDirection: 'row',
  },
  flatimage: {
    width: '100@ms',
    height: '80@vs',
    marginLeft: '10@ms',
    marginRight: '10@ms',
  },
  flatdataview: {
    flexDirection: 'column',
  },
  distance: {
    marginLeft: '265@ms',
    fontSize: 14,
    color: Colors.lightblack,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.lightblack,
    marginRight: 110,
  },
  flatcontainer: {
    marginTop: '10@vs',
    marginRight: '10@ms',
  },
  description: {
    textAlign: 'justify',
    lineHeight: '15@vs',
    fontSize: 14,
    color: Colors.lightblack,
  },
  descriptionview: {
    marginRight: '120@ms',
  },
  line: {
    width: '60%',
    height: '1@vs',
    backgroundColor: Colors.silvergrey,
    marginTop: '5@vs',
    marginLeft: '130@ms',
  },
});
