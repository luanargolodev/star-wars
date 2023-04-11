import { Container } from './styles'
import { theme } from '../../styles/theme'
import { Ionicons } from '@expo/vector-icons'

import { Text } from '../Text'

export const PlayButton = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(12)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14}>
        Assistir
      </Text>
    </Container>
  )
}
