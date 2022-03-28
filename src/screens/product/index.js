import {Button, Image, Text, View} from 'react-native';

import React from 'react';
import {colors} from '../../constants/themes';
import {styles} from './styles';

const Products = ({navigation, route}) => {
  const {product} = route.params;
  const {name, description, price, weight, photo} = product;
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
        <Button title="Order now" onPress={() => null} color={colors.primary} />
      </View>
    </View>
  );
};

export default Products;
