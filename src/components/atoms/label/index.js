import {Text, View} from 'react-native';

import React from 'react';
import {styles} from './styles';

const Label = ({children, label, labelStyle, subLabel, subLabelStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {children}
      {subLabel && <Text style={subLabelStyle}>{subLabel}</Text>}
    </View>
  );
};

export default Label;
