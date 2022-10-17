/**
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import {View, Text, Image, FlatList, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../../../components/header/Header';
import List from '../../../components/list/List';
import Search from '../../../components/search/Search';
import Dummydata from '../../../configs/Dummydata';
import img from '../../../constants/Image/Img';
import styles from './styles';

function ListingsScreen({navigation}) {
  const [data,setData] = useState(Dummydata);
  return (
    <View style={styles.container}>
      <Header 
        back={true}
        filter={true}
        onPress={() => {
          navigation.navigate("Home");
        }}
        onChangeFilterstate={(value)=>{if (value=="Name"){
          console.log(value);
         setData( Dummydata.sort((a, b) => {
          const nameA = a.title.toUpperCase(); // ignore upper and lowercase
          const nameB = b.title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) { 
            return -1; 
          }
          if (nameA > nameB) {
            return 1;
          }
          
          // names must be equal
          return 0;
        }))
        }
        else if(value=="Distance"){
          console.log(value);
          setData(data.sort((a, b) => a.distance - b.distance))
        }
        console.log(value);
        }}
        />
        <ScrollView>
      <Image source={img.blankimage.toString()} style={styles.Image} />
      <View style={styles.headtextview}>
        <Text style={styles.headtext}>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Text>
      </View>
       <Search onChange={value => {
          setData(
            Dummydata.filter(it => {
             return it.title.includes(value)
            })
          )
       }}/>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <List onPress={()=>{navigation.navigate('Detail',{data:item})}} item={item}/>}
          keyExtractor={item => item.id}
        />
      </View>
   </ScrollView>
    </View>
  );
}

export default ListingsScreen;
