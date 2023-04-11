import { ScreenScroll } from '../../components/Container'
import { GoBack } from '../../components/GoBack'
import { Hero } from '../../components/Hero'
import { useDataStore } from '../../services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()

  return (
    <ScreenScroll>
      <Hero item={selectedData} onDetail />
      <GoBack />
    </ScreenScroll>
  )
}
