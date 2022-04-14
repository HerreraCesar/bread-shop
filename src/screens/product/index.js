import {Button, Image, Text, View} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';

import React from 'react';
import {addItem} from '../../store/actions/cart.action';
import {colors} from '../../constants/themes';
import {styles} from './styles';

const Products = ({navigation, route}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const {name, description, price, weight, photo} = product;

  const handleAddToCart = () => dispatch(addItem(product));
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: photo,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.weight}>{weight}</Text>
      <Text style={styles.price}>$ {price}</Text>
      <View style={styles.button}>
        <Button
          title="Add to Cart"
          onPress={() => handleAddToCart()}
          color={colors.primary}
        />
      </View>
    </View>
  );
};

export default connect()(Products);
