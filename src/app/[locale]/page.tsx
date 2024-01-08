import { useLocale } from 'next-intl'
import NewsPage from './components/ui/NewsPage';




export default function Home() {
  const locale = useLocale()

  return (
    <>
      <NewsPage />
    </>
  )
}
