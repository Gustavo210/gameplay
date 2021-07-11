import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type PropsListHeader = {
  title: string;
  subtitle: string;
}

export const ListHeader: React.FC<PropsListHeader> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title}
      </Text>

      <Text style={styles.subtitle}>
        {props.subtitle}
      </Text>
    </View>
  )
}