import {FlatList, View} from 'react-native';

import CategoryProducts from '../../components/molecules/category-products';
import {PRODUCTS} from '../../constants/products';
import React from 'react';
import {styles} from './styles';

const Category = ({navigation, route}) => {
  const {id} = route.params;
  const selectedCategory = PRODUCTS.filter(product => product.category === id);
  const handleSelectCategory = product => {
    navigation.navigate('Product', {product, name: product.name});
  };
  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={selectedCategory}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Category;
