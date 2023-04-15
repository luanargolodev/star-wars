import { ScreenScroll } from '../../components/Container'
import { HomeList } from '../../components/HomeList'
import { Hero } from '../../components/Hero'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg',
    title: 'Darth Vader',
    type: 'Personagem',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader, nascido como Anakin Skywalker, é um personagem fictício da franquia Star Wars. É um dos personagens principais da trilogia original, aparecendo em Star Wars: Episódio IV - Uma Nova Esperança, Star Wars: Episódio V - O Império Contra-Ataca e Star Wars: Episódio VI - O Retorno de Jedi. É o pai de Luke Skywalker e Leia Organa, e o marido de Padmé Amidala. Ele é um dos principais antagonistas da trilogia prequel, aparecendo em Star Wars: Episódio I - A Ameaça Fantasma, Star Wars: Episódio II - Ataque dos Clones e Star Wars: Episódio III - A Vingança dos Sith. Ele também aparece em Star Wars: Episódio VII - O Despertar da Força, Star Wars: Episódio VIII - Os Últimos Jedi e Star Wars: Episódio IX - A Ascensão Skywalker. Ele é interpretado por David Prowse e James Earl Jones na trilogia original, e por Hayden Christensen na trilogia prequel.',
  },
  {
    id: 1,
    image_url: 'https://imgs.ponto.com.br/1511288203/1xg.jpg',
    title: 'Babby Yoda',
    type: 'Personagem',
    subtitle: 'The Child',
    description:
      'O Baby Yoda é um personagem fictício da franquia Star Wars. Ele é um membro da espécie Yoda, que aparece na série de televisão The Mandalorian. O personagem foi criado por Jon Favreau e Dave Filoni, e é interpretado por um ator de efeitos visuais. O Baby Yoda foi concebido como um personagem misterioso, e sua identidade foi mantida em segredo até o final da primeira temporada. O personagem foi recebido com aclamação da crítica, e foi comparado a outros personagens de Star Wars, como Yoda e R2-D2. O Baby Yoda também foi comparado a outros personagens de mídia popular, como Baby Groot e Baby Yoda. O Baby Yoda foi recebido com aclamação da crítica, e foi comparado a outros personagens de Star Wars, como Yoda e R2-D2. O Baby Yoda também foi comparado a outros personagens de mídia popular, como Baby Groot e Baby Yoda.',
  },
]

export const Home = () => {
  return (
    <ScreenScroll>
      <Hero
        item={{
          title: 'Episódio I',
          subtitle: 'A Ameaça Fantasma',
          type: 'Filme',
          image_url: 'https://imgs.ponto.com.br/1511288203/1xg.jpg',
        }}
      />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScroll>
  )
}
