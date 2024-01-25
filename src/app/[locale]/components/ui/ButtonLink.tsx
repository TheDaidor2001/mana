import Link from "next-intl/link";

interface Props {
    href: string;
    locale: string;
}

export const ButtonLink = ({ href, locale }: Props) => {

    return (
        <Link
            href={href}
            locale={locale}
            className="border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white px-10 py-3 rounded-lg text-xl font-bold transition-colors"
        >
            Ver noticia
        </Link>
    )
}
