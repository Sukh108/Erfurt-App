/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Button,Modal} from 'react-native';
import styles from './styles';
import img from '../../constants/Image/Img';
import {useSelector, useDispatch} from 'react-redux';
import {Add, Remove} from '../../redux/actions/Action';
import FilterScreen from '../../modules/FilterScreen/FilterScreen'
function Header({back=false, filter=false, onPress, fav=false, item,onChangeFilterstate}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected,setSelected] =useState("name")
  useEffect(()=>{
    onChangeFilterstate(selected)
  })
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  function containsObject(obj) {
    const list = data;
    var i;
    if (list[0] != undefined) {
      for (i = 0; i < list.length; i++) {
        if (list[i].payload === obj) {
          return true;
        }
      }

      return false;
    }
  }

  const dispacth = useDispatch();

  const data = useSelector(state => state.favoritedata);

  const [favcolor, setfav] = useState(containsObject(item));
  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity onPress={onPress}>
          <Image source={img.back} style={styles.image1} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>Erfurt-App</Text>
      {filter && (
        <TouchableOpacity onPress={toggleModal}>
          <Image source={img.filter} style={styles.image2} />
        </TouchableOpacity>
      )}
      <Modal visible={isModalVisible} animationType="slide">
        <FilterScreen onPress={toggleModal} onChangeFilter={(value)=>{setSelected(value)}}/>
      </Modal>
      {fav && (
        <TouchableOpacity
          onPress={() => {
            dispacth({type: Add, payload: item});
          }}>
          <Image source={img.favoriteicon} style={styles.image2} />
        </TouchableOpacity>
      )}
      {favcolor && (
        <TouchableOpacity
          onPress={() => {
            dispacth({type: Remove, payload: item});
          }}>
          <Image source={img.favoriteiconselect} style={styles.image2} />
        </TouchableOpacity>
      )}
    </View>
  );
}
export default Header;
