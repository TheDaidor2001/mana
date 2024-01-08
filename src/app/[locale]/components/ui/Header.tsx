import { useTranslations } from "next-intl"
import Link from "next-intl/link"

export const Header = () => {
    const t = useTranslations('Index')
    return (
        <section className="hidden border-b border-gray-700 w-full md:flex justify-center gap-5 my-14 pb-3">
            <Link
                href="/deportes"
                className="hover:underline transition-all"
            >{t('header-text-1')}</Link>
            <Link
                href="/"
                className="hover:underline transition-all"
            >{t('header-text-2')}</Link>
            <Link
                href="/"
                className="hover:underline transition-all"
            >Empresas</Link>
            <Link
                href="/"
                className="hover:underline transition-all"
            >Opinión</Link>
        </section>
    )
}
