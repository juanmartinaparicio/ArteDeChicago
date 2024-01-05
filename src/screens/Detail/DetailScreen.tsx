import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigator/StackNavigator';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { artWorks } from '../../types';
import Header from '../../components/Header';


type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type Props = {
  item: artWorks;
  route: DetailsScreenRouteProp;
};


const DetailScreen = ({route}: Props) => {
  const {item} = route.params;
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
    <Header />
    <View>
      <View>
        <Animated.Image
          sharedTransitionTag={item.title}
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
          }}
          style={{width: width, height: width}}
        />
        <Animated.View
          style={styles.textContainer}
          entering={FadeIn.delay(600)}>
          <Text style={styles.textName}>{item.title}</Text>
          <Text style={styles.textLocation}>{item.place_of_origin}</Text>
        </Animated.View>
      </View>
      <Animated.View entering={FadeInDown.delay(800)}>
        <ScrollView>

        <Text style={styles.textAbout}>Description</Text>
        <Text style={styles.text}>{item.description}</Text>
        </ScrollView>
      </Animated.View>
    </View>
    {/* <Button /> */}
  </View>
  )
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  textLocation: {
    color: 'white',
    fontSize: 16,
  },
  textAbout: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    color: '#323232',
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'justify',
  },
});
