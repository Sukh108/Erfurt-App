/**
 * 
 * @format
 */
import React, { useEffect, useState } from 'react';
import { View,Image,TextInput } from 'react-native';
import img from '../../constants/Image/Img'
import Colors from '../../styles/Colors';
import styles from './styles';
function Search({onChange}) {
  const [text,setText]=useState("")
  useEffect(()=>{
    onChange(text)
  },[text])
  return (
    <View style={styles.searchview}>
        <View style={styles.search}>
          <Image source={img.searchicon} style={styles.searchicon} />
        <TextInput placeholder=' Search' placeholderTextColor={Colors.lightblack} style={styles.Textinput} value={text} onChangeText={(value)=>setText(value)}/>
      
        </View>
        </View>
  )
}


export default Search;