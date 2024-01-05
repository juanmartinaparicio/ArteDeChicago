import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { artWorks } from '../../types';

type Props = {
  item: artWorks;
  id: number;
};

const RenderItem = ({item, index}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Pressable
        style={styles.container}
        onPress={()=>{navigation.navigate('Detail', {item:item});
      }}>
        <Animated.Image
          sharedTransitionTag={item.title}
          style={styles.image}
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.title}</Text>
          <Text style={styles.textLocation}>Year {item.date_display}</Text>
          <Text style={styles.textLocation}>Origin {item.place_of_origin}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: colors.colorE,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 8,
  },
  textContainer: {
    marginLeft: 10,
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: '#323232',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textLocation: {
    color: '#323232',
    fontSize: 18,
  },
});
