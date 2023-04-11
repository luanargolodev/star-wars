import { FlatList } from 'react-native'
import { Card } from '../Card'
import { Text } from '../Text'

const FAKE_DATA = [
  {
    id: 0,
    image_url: 'https://picsum.photos/200/300',
  },
  {
    id: 1,
    image_url:
      'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}
