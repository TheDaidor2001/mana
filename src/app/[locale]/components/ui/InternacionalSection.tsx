import { fetchApi } from "@/helpers/fetch-api";
import Separador from "./Separador";
import TitleIndex from "./TitleIndex";
import { useLocale } from "next-intl";
import { Noticia } from "@/interfaces/noticia.interfaces";
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
            filtros: 'internacional',
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


export default async function InternacionalSection() {

    const locale = useLocale()
    const { data } = await getNews(1, locale, 9)

    return (
        <section className="my-20">
            <Separador />
            <TitleIndex title="Manavox – Proyecto de Gala" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    data.map((items: Noticia) => {
                        const { titulo, slug, subtitulo, filtros, image } = items.attributes
                        const { url, height, width } = image.data.attributes.formats.medium
                        return (
                            <article key={items.id} className="flex flex-col lg:flex-row gap-5 mt-10">
                                <Image
                                    height={height}
                                    width={width}
                                    alt={`Imagen de la noticia ${titulo}`}
                                    src={url}
                                    className="rounded w-full lg:w-1/2 h-auto aspect-video"
                                    loading="lazy"
                                />
                                <div>
                                    <TitleNew classes="mt-2 mb-3 text-lg" slug={slug} title={titulo} />
                                    <p className='mt-4 text-sm text-gray-700 mb-2'>{data[0].attributes.subtitulo}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
