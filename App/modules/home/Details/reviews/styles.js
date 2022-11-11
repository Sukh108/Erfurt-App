/**
 *
 * @format
 */
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../styles/Colors';
export default styles = ScaledSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: Colors.primery,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image1: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },
  image2: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 20,
  },
  img: {
    width: 30,
    height: 30,
  },

  text: {
    justifyContent: 'center',
    alignSelf: 'center',

    fontWeight: '700',
    fontSize: 24,
    color: Colors.white,
  },
  list: {
    margin: '20@ms',
    marginBottom: 0,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
  },
  date: {
    fontSize: 14,

    color: Colors.black,
  },
  comment: {
    marginTop: '5@ms',
    marginBottom: '5@ms',
  },
  line: {
    height: '1@ms',
    backgroundColor: Colors.silvergrey,
    marginTop: '10@ms',
  },
  modelContainer: {
    flex: 1,
  },
  modalHeader: {
    height: '60@ms',
    backgroundColor: Colors.lightsilver,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancel: {
    color: Colors.primery,
    fontSize: 16,
  },
  header: {
    color: Colors.black,
    fontSize: 16,
    marginLeft: '35@ms',
  },
  cancelview: {
    marginLeft: '10@ms',
  },
  Bewertenungen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '40@vs',
    marginLeft: '10@ms',
    marginRight: '10@ms',
  },
  button: {
    height: '40@ms',
    margin: '20@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttontext: {
    color: Colors.white,
  },
  blank: {
    backgroundColor: Colors.white,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
