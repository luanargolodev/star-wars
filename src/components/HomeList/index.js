import { FlatList } from 'react-native'
import { Container } from './styles'
import { theme } from '../../styles/theme'

import { Card } from '../Card'
import { Text } from '../Text'

export const HomeList = ({ data, title }) => {
  return (
    <Container>
      <Text ml={24} fontFamily="black" size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </Container>
  )
}
