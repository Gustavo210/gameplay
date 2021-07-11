import { LinearGradient } from "expo-linear-gradient"
import React, { ReactNode } from "react"
import { BorderlessButton } from 'react-native-gesture-handler'
import { Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather'

import { theme } from "../../global/styles/theme"
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native"


interface PropsHeader {
  title: string
  action?: ReactNode
}

export const Header: React.FC<PropsHeader> = props => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={theme.colors.heading} />
      </BorderlessButton>
      <Text style={styles.title}>
        {props.title}
      </Text>
      {
        props.action ? (
          <View >
            {props.action}
          </View>
        ) : (<View style={{ width: 24 }}></View>)
      }
    </LinearGradient>
  )
}