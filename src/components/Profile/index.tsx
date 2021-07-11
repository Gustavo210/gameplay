import React from 'react';
import { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { ModalAlertView } from '../ModalAlertView';
import { styles } from './styles';

export function Profile() {
  const { user, singOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleSignOut() {
    alert("Ois")
    singOut()
  }

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={openModal}>
        <Avatar urlImage={user.avatar} />
      </TouchableOpacity>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
      {isModalOpen && (

        <ModalAlertView closeModal={() => { }}>
          <View style={styles.headerTitle}>
            <Text style={styles.textTitle}>Deseja sair do </Text>
            <Text style={[styles.textTitle, { fontWeight: "bold" }]}>Game</Text>
            <Text style={[styles.textTitle, { color: theme.colors.primary, fontWeight: "bold" }]}>Play</Text>
            <Text style={[styles.textTitle, { fontWeight: "bold" }]}>?</Text>
          </View>

          <View style={styles.footerButtons}>
            <View style={styles.containerButton}>
              <Button title="Não" outline onPress={closeModal} />

            </View>
            <View style={styles.containerButton}>
              <Button title="Sim" onPress={handleSignOut} />
            </View>
          </View>

        </ModalAlertView>

      )}
    </View>
  )

}