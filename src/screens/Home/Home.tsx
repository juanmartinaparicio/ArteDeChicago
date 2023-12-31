import { StyleSheet, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import fetch from '../../utils/fetch';
import PrincipalCard from '../../components/PrincipalCard';
import { PostArt } from '../../types';

const Home = () => {
  const [page, setPage] = useState<PostArt>();
  useEffect(() => {
    const loadPage = async ()=>{
      try {
        const data = await fetch();
        setPage(data.data);
      } catch (error) {
        console.log(error);
        setPage(undefined);
      }
    };
    loadPage().catch(null);
  },[]);

  console.log(page);

  return (
    <View style={styles.container}>
      <Header/>
      <PrincipalCard {...page}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal:16,
  },
});

export default Home;
