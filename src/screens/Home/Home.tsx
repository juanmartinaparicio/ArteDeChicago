import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/HeaderHome/Header';
import fetch from '../../utils/fetch';
import {api} from '../../services/api';
import RenderItem from '../../components/RenderItem';
import colors from '../../theme/colors';
/* import PrincipalCard from '../../components/PrincipalCard';
import { PostArt } from '../../types'; */

type Artwork = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const Home: React.FC<{navigation: any}> = ({navigation}) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  // Fetch artworks from the Art Institute of Chicago API
  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const artworkResponse = await fetch(api);
        setArtworks(artworkResponse.data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
        //setArtworks(undefined);
      }
    };
    loadArtworks();
  }, []);

  console.log(JSON.stringify(artworks, null, 4));

  // Render individual art card
  /* const renderArtCard = ({ item }: { item: Artwork }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ArtDetails', { artwork: item })}>
      <View>
        <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  ); */

  return (
    <View style={styles.container}>
      <View>
        <Header />
        <View>
          <FlatList
            data={artworks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index }) => {
              return <RenderItem item={item} index={index} />;
            }}
          />
        </View>
        {/* <PrincipalCard {...page}/> */}
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Splash')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.colorC,
  },
});

export default Home;
