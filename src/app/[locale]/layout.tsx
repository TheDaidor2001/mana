import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { HTMLAttributes } from 'react';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';



interface Props extends HTMLAttributes<HTMLElement> {
  params: {
    locale: string;
  };
  children: React.ReactNode | JSX.Element;
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Malabo Nation - Web infomativa en Guinea Ecuatorial',
  description: 'Somos una web de noticias e información en Guinea Ecuatorial. Toda la información del Pais en malabo nation.',
}

export default function RootLayout({ children, params }: Props) {

  const locale = useLocale();
  const messages = useMessages()

  //show 404 Error if  is not exist
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-2420612436873886" />
      </head>
      <body className={`${inter.className} max-w-7xl mx-auto px-5`} >

        <header className="max-w-7xl mx-auto mt-20">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale} />
          </NextIntlClientProvider>
        </header>

        {children}

        <Footer />
      </body>
    </html>
  )
}
