import { Container } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

import { Text } from '../Text'

export const IconButton = ({ name, label, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Ionicons
        name={name}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamily="semiBold" size={10} mt={6}>
        {label}
      </Text>
    </Container>
  )
}
