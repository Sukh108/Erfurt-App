/**
 * 
 * @format
 */
import React ,{useState} from 'react';
import { View,FlatList } from 'react-native';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import List from '../../components/list/List';
import Dummydata from '../../configs/Dummydata';
function Searchscreen({navigation}) {
  const [selected,setSelected] =useState("name")
  const [data,setData] = useState(Dummydata);
  return (
    <View style={styles.container}>
      <Header filter={true} 
        onChangeFilterstate={(value)=>{setSelected(value)}}
              />
      <Search onChange={value => {
          setData(
            Dummydata.filter(it => {
             return it.title.includes(value)
            })
          )
       }}/>
      <FlatList
          data={data}
          renderItem={({item}) => <List onPress={()=>{navigation.navigate('Detail',{data:item})}} item={item}/>}
          keyExtractor={item => item.id}
        />
    </View>
  );
}



export default Searchscreen;