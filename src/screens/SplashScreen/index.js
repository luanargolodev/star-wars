import { useEffect } from 'react'

import { Text } from '../../components/Text'
import { Logo } from '../../components/Logo'
import { Container } from '../../components/Container'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text>Star Wars</Text>
    </Container>
  )
}
