import {Button, Text, View} from 'react-native';

import React from 'react';
import {colors} from '../../../constants/themes';
import {styles} from './styles';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.quantity}>cantidad: {item.quantity}</Text>
        </View>
        <View>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Eliminar"
            onPress={() => onDelete(item.id)}
            color={colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
