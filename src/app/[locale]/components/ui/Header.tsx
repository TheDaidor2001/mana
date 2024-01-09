import { useTranslations } from "next-intl"
import { LinksPage } from "./LinksPage"

export const Header = () => {
    const t = useTranslations('Index')
    return (
        <section className="hidden border-b border-gray-700 w-full md:flex justify-center gap-5 my-14 pb-3">
            <LinksPage urlPath="/deportes" text={t('header-text-1')} />
            <LinksPage urlPath="/ranking-nacional" text={t('header-text-2')} />
            <LinksPage urlPath="/sociedad" text={t('header-text-3')} />
            <LinksPage urlPath="/economia" text={t('header-text-4')} />
            <LinksPage urlPath="/geopolitica" text={t('header-text-5')} />
            <LinksPage urlPath="/manavox" text={t('header-text-6')} />

        </section>
    )
}
