import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Logo } from '../../components/Logo'
import { Text } from '../../components/Text'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Star Wars</Text>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
