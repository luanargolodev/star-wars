import { Container, ImageBackground, Gradient, ButtonsView } from './styles'
import { colors } from '../../styles/colors'

import { Text } from '../Text'
import { Logo } from '../Logo'
import { Tag } from '../Tag'
import { IconButton } from '../IconButton'
import { PlayButton } from '../PlayButton'

export const Hero = ({ item, onDetail }) => {
  const { image_url, title, subtitle, type } = item

  return (
    <Container>
      <ImageBackground
        source={{
          uri: image_url,
        }}
      >
        <Gradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>

          <ButtonsView>
            <IconButton label="Favoritos" name="add-circle-outline" />
            <PlayButton />
            {!onDetail && (
              <IconButton
                label="Saiba mais"
                name="information-circle-outline"
              />
            )}
          </ButtonsView>
        </Gradient>
      </ImageBackground>
    </Container>
  )
}
