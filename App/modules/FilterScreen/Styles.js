/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../styles/Colors';

export default styles = ScaledSheet.create({
 
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10@ms',
    backgroundColor: Colors.white,
  },
  cancellationStyle: {
    // position: 'relative',
    // left: '10@ms',
    // top: '10@ms',
    color: Colors.primery,
    fontSize: '16@ms',
    fontWeight: '400',
    // alignSelf: 'flex-end',
  },
  heading: {
    fontSize: '16@ms',
    fontWeight: '460',
    color: Colors.black,

    // alignContent: 'center',
    // textAlign: 'center',
  },
  title: {
    padding: '10@ms',
  },
  titleText: {
    fontSize: '16@ms',
    fontWeight: '400',
    color: Colors.black,
  },
  optionMenu: {
    backgroundColor:Colors.white,
    padding: '10@ms',
  },
  options: {
    flexDirection: 'row',
    paddingTop: '10@ms',
    paddingBottom: '10@ms',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineStyle: {
    marginTop: '2@ms',
    marginBottom: '2@ms',
    width: '100%',
    alignSelf: 'center',
    height: '1@ms',
    backgroundColor: Colors.silvergrey,
  },
  tickStyle: {
    width: 30,
    height: 30,
    tintColor: Colors.primery,
  },
});
