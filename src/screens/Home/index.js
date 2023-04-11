import { Container, ScreenScroll } from '../../components/Container'
import { HomeList } from '../../components/HomeList'
import { Hero } from '../../components/Hero'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader, nascido como Anakin Skywalker, é um personagem fictício da franquia Star Wars. É um dos personagens principais da trilogia original, aparecendo em Star Wars: Episódio IV - Uma Nova Esperança, Star Wars: Episódio V - O Império Contra-Ataca e Star Wars: Episódio VI - O Retorno de Jedi. É o pai de Luke Skywalker e Leia Organa, e o marido de Padmé Amidala. Ele é um dos principais antagonistas da trilogia prequel, aparecendo em Star Wars: Episódio I - A Ameaça Fantasma, Star Wars: Episódio II - Ataque dos Clones e Star Wars: Episódio III - A Vingança dos Sith. Ele também aparece em Star Wars: Episódio VII - O Despertar da Força, Star Wars: Episódio VIII - Os Últimos Jedi e Star Wars: Episódio IX - A Ascensão Skywalker. Ele é interpretado por David Prowse e James Earl Jones na trilogia original, e por Hayden Christensen na trilogia prequel.',
  },
  {
    id: 1,
    image_url:
      'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg',
  },
]

export const Home = () => {
  return (
    <ScreenScroll>
      <Hero />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScroll>
  )
}
