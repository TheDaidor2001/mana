import { fetchApi } from "@/helpers/fetch-api";
import Separador from "./Separador"
import TitleIndex from "./TitleIndex"
import { useLocale } from "next-intl";
import Image from "next/image";
import TitleNew from "./TitleNew";

const getNews = async (start = 1, locale = "", pageSize = 4) => {
    const path = "/noticias";
    const urlParamsObjet = {
        populate: "image",
        sort: {
            createdAt: "asc",
        },
        filters: {
            filtros: 'economia',
        },
        pagination: {
            page: start,
            pageSize: pageSize,
        },
        locale,
    };

    const { data } = await fetchApi(path, urlParamsObjet);

    return {
        data,
    };
};


export async function EconomiaSection() {

    const locale = useLocale()
    const { data } = await getNews(1, locale, 3)


    return (
        <section className="my-20">
            <Separador />
            <TitleIndex title="Economía" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <article className="mt-10">
                    <Image
                        height={150}
                        width={150}
                        alt={`Imagen de la noticia ${data[0].attributes.titulo}`}
                        src={data[0].attributes.image.data.attributes.formats.medium.url}
                        className="rounded w-full h-auto"
                        loading="lazy"
                    />
                    <TitleNew classes="mt-2 mb-3 text-lg" slug={data[0].attributes.slug} title={data[0].attributes.titulo} />

                    <p className='mt-4 text-sm text-gray-700 mb-2'>{data[0].attributes.subtitulo}</p>

                </article>
                <article className="mt-10">
                    <TitleNew classes="mt-2 mb-3 text-lg" slug={data[1].attributes.slug} title={data[1].attributes.titulo} />

                    <Image
                        height={150}
                        width={150}
                        alt={`Imagen de la noticia ${data[1].attributes.titulo}`}
                        src={data[1].attributes.image.data.attributes.formats.medium.url}
                        className="rounded w-full h-auto mb-3"
                        loading="lazy"
                    />

                    <p className='mt-4 text-sm text-gray-700 mb-2'>{data[1].attributes.subtitulo}</p>
                </article>
                <article className="mt-10">
                    <Image
                        height={150}
                        width={150}
                        alt={`Imagen de la noticia ${data[2].attributes.titulo}`}
                        src={data[2].attributes.image.data.attributes.formats.medium.url}
                        className="rounded w-full h-auto"
                        loading="lazy"
                    />
                    <TitleNew classes="mt-2 mb-3 text-lg" slug={data[2].attributes.slug} title={data[2].attributes.titulo} />
                    <p className='mt-4 text-sm text-gray-700 mb-2'>{data[2].attributes.subtitulo}</p>

                </article>
            </div>
        </section>
    )
}
