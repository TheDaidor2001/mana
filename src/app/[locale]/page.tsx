import {  useLocale, useMessages } from 'next-intl'
import NewsPage from './components/ui/NewsPage';

const filters = [
  'Deportes',
  'Actualidad',
  'Últimas Noticias',
  'Empresas',
]



export default function Home() {
  const locale = useLocale()

  return (
    <>
      <NewsPage/>
    </>
  )
}
