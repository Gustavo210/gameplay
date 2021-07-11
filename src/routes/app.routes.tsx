import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { theme } from '../global/styles/theme'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'
import { Header } from '../components/Header'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100
      }
    }}>
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Screen options={{ headerShown: false }} name="AppointmentDetails" component={AppointmentDetails} />
      <Screen options={{
        header: () => (<Header
          title="Agendar partida"
        />)
      }} name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  )
}