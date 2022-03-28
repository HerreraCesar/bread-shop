import {FlatList, View} from 'react-native';

import {CATEGORIES} from '../../constants/categories';
import CategoryGrid from '../../components/molecules/category-grid';
import React from 'react';
import {styles} from './styles';

const Home = ({navigation}) => {
  const handleSelectCategory = category => {
    navigation.navigate('Category', {id: category.id, name: category.name});
  };
  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
