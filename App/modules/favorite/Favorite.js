
/**
 * 
 * @format
 */
import React,{useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import List from '../../components/list/List'
function Favorite(props) {
  const [selected,setSelected] =useState("name")
 const data= useSelector(state => state.favoritedata)
  const [mydata,setData] = useState(data);
    return (
    <View style={styles.container}>
    <Header filter={true} onChangeFilterstate={(value)=>{setSelected(value)}}
/>
    <Search onChange={value => {
      console.log("data", mydata);
        console.log(value);
        
        
       }}/>
    <FlatList
        data={data}
        renderItem={({item}) => <List onPress={()=>{navigation.navigate('Detail')}} item={item.payload}/>}
        keyExtractor={item=>item.id}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Favorite;