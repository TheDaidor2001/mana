import Image from 'next/image'
import Navbar from './components/ui/Navbar';

import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'

export default function Home() {

  const locale = useLocale()
  const messages = useMessages();
  return (
    <>
      <header className="max-w-7xl mx-auto mt-10">
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale}/>
        </NextIntlClientProvider>
        
      </header>
      <main className="max-w-7xl mx-auto">
        <h1>Hola</h1>
      </main>
    </>
  )
}
