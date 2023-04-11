import { Container, ImageBackground, Gradient, ButtonsView } from './styles'
import { colors } from '../../styles/colors'

import { Text } from '../Text'
import { Logo } from '../Logo'
import { Tag } from '../Tag'
import { IconButton } from '../IconButton'

export const Hero = ({ item }) => {
  const { image_url, title, subtitle, type } = item

  return (
    <Container>
      <ImageBackground
        source={{
          uri: image_url,
        }}
      >
        <Gradient colors={[colors.dark, 'transparent', colors.dark]}>
          <Logo size="small" />
          <Tag mt={200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>

          <ButtonsView>
            <IconButton label="Favoritos" name="add-circle-outline" />
            <IconButton label="Favoritos" name="add-circle-outline" />
            <IconButton label="Saiba mais" name="information-circle-outline" />
          </ButtonsView>
        </Gradient>
      </ImageBackground>
    </Container>
  )
}
