import { Container } from './styles'

import { Text } from '../Text'

export const Tag = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Text fontFamily="bold" size={14}>
        {children}
      </Text>
    </Container>
  )
}
