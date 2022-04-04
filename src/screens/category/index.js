import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { filteredProducts, selectProduct, selectedProduct } from '../../store/actions/product.action';

import CategoryProducts from '../../components/molecules/category-products';
import {PRODUCTS} from '../../constants/products';
import {styles} from './styles';

const Category = ({navigation, route}) => {
  const dispatch = useDispatch();
  const categoryProduct = useSelector( state => state.products.filteredProducts)
  const selectedCategory = useSelector( state => state.categories.selectedCategory)
  
  const handleSelectCategory = product => {
    dispatch(selectProduct(product.id))
    navigation.navigate('Product', {name: product.name});
  };
  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );

  useEffect( () => {
    dispatch(filteredProducts(selectedCategory.id))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryProduct}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Category);
