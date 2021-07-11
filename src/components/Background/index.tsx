import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import styles from "./styles";
import { theme } from "../../global/styles/theme";


export const Background: React.FC = props => {

  return (
    <LinearGradient
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
      style={styles.container}>
      {props.children}
    </LinearGradient>
  )
}