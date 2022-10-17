/**
 * 
 * @format
 */
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import img from '../../constants/Image/Img';
import Header from '../../components/header/Header';


function Viewscreen({navigation}) {
  

  return (
    <View style={styles.headcontainer}>
      <Header back={false} filter={false} onChangeFilterstate={(value)=>{console.log(value);}}
/>
      <ScrollView>
        <Image source={img.logo.toString()} style={styles.image} />
        <View style={styles.bottomcontainer}>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <View style={styles.categoryicon}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.sehenswert.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.unterkunft.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.dienstleistungen.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image 
                source={img.angebote.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.categoryicon}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.essen.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.einkaufen.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.freizeit.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.parken.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryicon}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.museen.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.immobilien.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.ausflugsziele.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.flughafen.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryicon}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.nahverkehr.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.events.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.jobs.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Listing')}}>
              <Image
                source={img.impressionen.toString()}
                style={styles.categoryimage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Viewscreen;
