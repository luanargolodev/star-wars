import { Container, ImageBackground, Gradient } from './styles'
import { colors } from '../../styles/colors'

import { Text } from '../Text'
import { Logo } from '../Logo'
import { Tag } from '../Tag'

export const Hero = () => {
  return (
    <Container>
      <ImageBackground
        source={{
          uri: 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg',
        }}
      >
        <Gradient colors={[colors.dark, 'transparent', colors.dark]}>
          <Logo size="small" />
          <Tag mt={214}>Filme</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            Episódio I
          </Text>
          <Text size={18}>A Ameaça Fantasma</Text>
        </Gradient>
      </ImageBackground>
    </Container>
  )
}
