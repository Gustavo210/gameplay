import React from "react";
import { View, Text, Image, ScrollView, ScrollViewProps } from 'react-native'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


interface PropsCategory extends RectButtonProps {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
  hasCheckBox?: boolean
}

export const Category: React.FC<PropsCategory> = ({ title, icon: Icon, checked = false, hasCheckBox = false, ...rest }) => {

  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
        style={styles.container}
      >
        <LinearGradient
          colors={[checked ? theme.colors.secondary85 : theme.colors.secondary50, theme.colors.secondary40]}
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}>
          {hasCheckBox && (

            <View style={checked ? styles.checked : styles.check} />
          )}
          <Icon width={48} height={48} />
          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}