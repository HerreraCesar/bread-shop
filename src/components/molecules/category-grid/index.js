import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const CategoryGrid = ({ item, onSelected }) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryGrid;
