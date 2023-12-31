import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
//import font from '../theme/fonts';
import colors from '../../theme/colors';

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
      <Text style={styles.title}>ART INSTITUTE</Text>

        </View>
        <View style={styles.rigthContainer}>
      <Image
        source = {require('../../assets/logo.png')}
        style = {styles.image}
      />

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flexDirection:'row',
    alignItems: 'center',


  },
  leftContainer: {
    flex: 1,
    alignItems:'flex-start',
  },
  rigthContainer: {
    flex: 1,
    alignItems:'flex-end',
  },
  //title: font.midium,
  title:{
    fontSize: 20,
    color:colors.colorA,
    fontWeight:'bold',
    fontFamily:'Cochin',
  },
  image:{
    width:90,
    height:90,
  },
});

export default Header;
