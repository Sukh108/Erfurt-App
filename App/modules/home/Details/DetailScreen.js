/**
 * 
 * @format
 */
import React,{useState} from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../../../components/header/Header';
import styles from './styles';
function DetailScreen({navigation,route}) {
  const [selected,setSelected] =useState("name")
 const {data} = route.params;
 console.log(data);
  return (
    <View style={styles.container}>
         <Header
        back={true}
        fav={true}
        item={data}
        onPress={() => {
          navigation.goBack();
        }}
        onChangeFilterstate={(value)=>{setSelected(value)}}

       />
       <Image source={data.image} style={styles.image}/>
       <Text>{data.image}</Text>
    </View>
  );
}


export default DetailScreen;