import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'

import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../../src/components/Background';
import { ButtonIcon } from '../../components/ButtonIcon'
import { useAuth } from '../../hooks/auth'
import { Alert } from 'react-native';
import { theme } from '../../global/styles/theme';

export function SignIn() {

  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {

      await signIn()
    } catch (error) {
      Alert.alert("Erro", error)
    }
  }
  return (
    <Background>

      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} e organize suas {'\n'} jogatinas
          </Text>
          <Text style={styles.subTitle}>
            Crie grupos para seus games {'\n'} favoritos com seus amigos
          </Text>
          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> : (
              <ButtonIcon title="Entrar com discord" onPress={handleSignIn} />
            )
          }
        </View>
      </View>
    </Background>
  )
}
