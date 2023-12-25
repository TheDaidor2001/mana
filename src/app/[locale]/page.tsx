import Image from 'next/image'
import Navbar from './components/ui/Navbar';

import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'
import Link from 'next/link';

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
            <section className=' border-b border-black mt-5 pb-2 flex gap-3 text-gray-950 justify-center'>
            {
              filters.map((filter, i) => (
                <Link href={'/'} key={i}>{filter}</Link>
              ))
            }
            </section>
        </NextIntlClientProvider>
      </header>
      <main className="max-w-7xl mx-auto">
        <h1>Hola</h1>
      </main>
    </>
  )
}
