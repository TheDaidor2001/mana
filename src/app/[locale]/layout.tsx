import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { HTMLAttributes } from 'react';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';



interface Props extends HTMLAttributes<HTMLElement> {
  params: {
    locale: string;
  };
  children: React.ReactNode | JSX.Element;
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Malabo Nation - Web infomativa en Guinea Ecuatorial',
  description: 'Somos una web de noticias e información en Guinea Ecuatorial. Toda la información del Pais en malabo nation',
}

export default function RootLayout({ children, params }: Props) {

  const locale = useLocale();

  //show 404 Error if Idiom is not exist
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} max-w-7xl mx-auto px-5` } >{children}</body>
    </html>
  )
}
