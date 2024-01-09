import { useTranslations } from "next-intl"
import Link from "next-intl/link"

export const Header = () => {
    const t = useTranslations('Index')
    return (
        <section className="hidden border-b border-gray-700 w-full md:flex justify-center gap-5 my-14 pb-3">
            <Link
                href="/deportes"
                className="hover:underline transition-all text-sm"
            >{t('header-text-1')}</Link>
            <Link
                href="/ranking-nacional"
                className="hover:underline transition-all text-sm"
            >{t('header-text-2')}</Link>
            <Link
                href="/sociedad"
                className="hover:underline transition-all text-sm"
            >{t('header-text-3')}</Link>
            <Link
                href="/economia"
                className="hover:underline transition-all text-sm"
            >{t('header-text-4')}</Link>
            <Link
                href="/geopolitica"
                className="hover:underline transition-all text-sm"
            >{t('header-text-5')}</Link>
            <Link
                href="/manavox"
                className="hover:underline transition-all text-sm"
            >{t('header-text-6')}</Link>
        </section>
    )
}
