import Image from "next/image";
import Link from "next/link";


interface Props {
    url: string;
    titulo: string;
    slug: string;
    subtitulo: string;
}

export default function ArticleNews(props: Props) {
    const { slug, subtitulo, titulo, url } = props
    return (
        <article className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Image
                height={100}
                width={100}
                src={url}
                alt={titulo}
                className="w-full rounded-sm"
            />
            <div className="flex flex-col">
                <Link
                    href={`/news/${slug}`}
                >
                    <h2 className="text-2xl font-bold text-balance">{titulo}</h2>
                </Link>
                <p className="text-sm mt-5 font-light">{subtitulo}</p>
            </div>
        </article>
    )
}
