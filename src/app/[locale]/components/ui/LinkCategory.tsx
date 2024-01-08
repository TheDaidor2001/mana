import { useLocale } from "next-intl"
import Link from "next-intl/link"

interface Props {
    filtros: string,
    locale: string
}




export const LinkCategory = ({ filtros, locale }: Props) => {
    return (
        <Link
            locale={locale}
            href={`/${filtros}`}
            className="text-sm border font-bold border-yellow-400 text-yellow-500 rounded-2xl px-2 py-1 capitalize hover:bg-yellow-500 hover:text-yellow-800 transition-colors hover:border-none"
        > {filtros}</Link>
    )
}
