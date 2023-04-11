import { Container } from '../../components/Container'
import { HomeList } from '../../components/HomeList'
import { Hero } from '../../components/Hero'

export const Home = () => {
  return (
    <Container align="flex-start" justify="flex-start">
      <Hero />
      <HomeList />
    </Container>
  )
}
