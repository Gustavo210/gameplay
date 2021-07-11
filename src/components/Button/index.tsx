import React from 'react';
import { Text, TouchableHighlight, TouchableOpacityProps, TouchableOpacity, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  outline?: boolean
}

export function Button({ title, outline, ...rest }: Props) {
  return (
    <View style={[outline ? styles.containerOutline : styles.container]}>

      <TouchableOpacity
        style={styles.button}
        {...rest}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}