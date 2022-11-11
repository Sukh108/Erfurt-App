/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import styles from './styles';
import img from '../../constants/Image/Img';
import {useDispatch} from 'react-redux';
import {addToFavorite, removeToFavorite} from '../../redux/actions/Action';
import FilterScreen from '../../modules/FilterScreen/FilterScreen';
function Header({
  back = false,
  filter = false,
  onPress,
  fav = false,
  isfav,
  item,
  onChangeFilterstate,
  filterValue,
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(filterValue);
  useEffect(() => {
    onChangeFilterstate(selected);
  }, [selected]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dispacth = useDispatch();

  const [favcolor, setfav] = useState(isfav);

  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity onPress={onPress} style={styles.image1}>
          <Image source={img.back} style={styles.img} />
        </TouchableOpacity>
      )}
      {!back && filter && <View style={styles.image1}></View>}
      <Text style={styles.text}>Erfurt-App</Text>
      {back && !filter && !fav && <View style={styles.image1}></View>}
      {filter && (
        <TouchableOpacity onPress={() => toggleModal()} style={styles.image2}>
          <Image source={img.filter} style={styles.img} />
        </TouchableOpacity>
      )}
      <Modal visible={isModalVisible} animationType="slide">
        <FilterScreen
          onPress={toggleModal}
          filterValue={selected}
          onChangeFilter={value => {
            setSelected(value);
          }}
        />
      </Modal>
      {fav && !favcolor && (
        <TouchableOpacity
          style={styles.image2}
          onPress={() => {
            setfav(!favcolor);

            dispacth(addToFavorite(item));
          }}>
          <Image source={img.favoriteicon} style={styles.img} />
        </TouchableOpacity>
      )}
      {fav && favcolor && (
        <TouchableOpacity
          style={styles.image2}
          onPress={() => {
            setfav(!favcolor);
            dispacth(removeToFavorite(item));
          }}>
          <Image source={img.favoriteiconselect} style={styles.img} />
        </TouchableOpacity>
      )}
    </View>
  );
}
export default Header;
