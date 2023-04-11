import { ScreenScroll } from '../../components/Container'
import { Hero } from '../../components/Hero'
import { useDataStore } from '../../services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()

  return (
    <ScreenScroll>
      <Hero item={selectedData} />
    </ScreenScroll>
  )
}
