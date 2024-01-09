'use client'

import { useTranslations } from "use-intl"
import { LinksPage } from "./LinksPage";
interface Props {
  locale: string;
}


export default function Footer({ locale }: Props) {

  const t = useTranslations('Index')
  return (
    <footer className="border-t border-gray-400 py-5">
      <p className=""><span className="font-bold">Mana - Malabo Nation. </span> Todos los derechos reservados&copy;</p>
      <div className="flex gap-2 flex-wrap mt-3">
        <LinksPage classes="border-r border-gray-400 pr-3 text-lg" text={t('header-text-1')} urlPath="/deportes" />
        <LinksPage classes="border-r border-gray-400 pr-3 text-lg" text={t('header-text-2')} urlPath="/ranking-nacional" />
        <LinksPage classes="border-r border-gray-400 pr-3 text-lg" text={t('header-text-3')} urlPath="/sociedad" />
        <LinksPage classes="border-r border-gray-400 pr-3 text-lg" text={t('header-text-4')} urlPath="/economia" />
        <LinksPage classes="border-r border-gray-400 pr-3 text-lg" text={t('header-text-5')} urlPath="/geopolitica" />
        <LinksPage classes="text-lg" text={t('header-text-6')} urlPath="/manavox" />
      </div>
    </footer>
  )
}
