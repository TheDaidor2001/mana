import Image from 'next/image'
import Navbar from './components/ui/Navbar';


import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'
import Link from 'next-intl/link';
import NewsPage from './components/ui/NewsPage';
import Footer from './components/ui/Footer';
import Separador from './components/ui/Separador';


const filters = [
  'Deportes',
  'Actualidad',
  'Últimas Noticias',
  'Empresas',
]



export default function Home() {
  const locale = useLocale()
  const messages = useMessages();

  return (
    <>
      <header className="max-w-7xl mx-auto mt-20">
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale}/>
            <section className='hidden md:flex border-b border-black mt-10 pb-2  gap-3 text-gray-950 justify-center'>
            {
              filters.map((filter, i) => (
                <Link href={'/'} locale={locale} key={i}>{filter}</Link>
              ))
            }
            </section>
        </NextIntlClientProvider>
      </header>
      <NewsPage/>
      <Footer />
    </>
  )
}
