import React from "react";
import { View, Text, Image } from 'react-native'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import DiscordImg from '../../assets/discord.png'
import { styles } from "./styles";

interface PropsButtonIcon extends RectButtonProps {
  title: string
}

export const ButtonIcon: React.FC<PropsButtonIcon> = props => {

  return (
    <RectButton style={styles.container} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />

      </View>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </RectButton>
  )
}