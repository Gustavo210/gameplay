import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentered?: boolean
}

export const ListDivider: React.FC<Props> = props => {
  return (
    <View
      style={[styles.container, props.children ? {
        marginVertical: 12
      } : {
        marginTop: 2,
        marginBottom: 31
      }]}
    />
  );
}