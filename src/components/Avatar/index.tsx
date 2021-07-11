import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import styles from "./styles";
import { theme } from "../../global/styles/theme";


interface PropsAvatar {
  urlImage: string
}

export const Avatar: React.FC<PropsAvatar> = props => {

  return (
    <LinearGradient
      colors={[theme.colors.secondary50, theme.colors.secondary70]}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{
          uri: props.urlImage
        }}
      />
    </LinearGradient>
  )
}