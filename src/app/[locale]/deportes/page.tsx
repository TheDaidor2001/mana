import { fetchApi } from "@/helpers/fetch-api";
import TitleIndex from "../components/ui/TitleIndex"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Noticia } from "@/interfaces/noticia.interfaces";
import ArticleNews from "../components/ui/ArticleNews";
import { TopTextPages } from '../components/ui/TopTextPages';
import { ButtonLink } from "../components/ui/ButtonLink";


export const metadata = {
    title: 'Malabo Nations - Deportes',
    description: 'Las ultimas noticias de deporte nacional e internacional en Malabo Nations',
};


const getOpinionNews = async (start = 1, locale = "", pageSize = 10) => {
    const path = "/noticias";
    const urlParamsObjet = {
        populate: "image",
        sort: {
            createdAt: "asc",
        },
        filters: {
            filtros: 'deportes',
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

async function DeportesPage() {
    const locale = useLocale()

    const { data } = await getOpinionNews(1, locale);
    const slicedData = data.slice(1)


    return (
        <>
            <section className="py-10">
                <TopTextPages text="header-text-1" />
                <article className=" border-b border-gray-600 flex flex-col lg:flex-row space-y-10 py-10">
                    <div className="m-auto">
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-pretty">{data[0].attributes.titulo}</h1>
                        <p className="mt-10 text-lg text-gray-800 font-light text-balance mb-10">{data[0].attributes.subtitulo}</p>
                        <ButtonLink href={`/news/${data[0].attributes.slug}`} locale={locale} />
                    </div>
                    <Image
                        height={500}
                        width={500}
                        src={data[0].attributes.image.data.attributes.formats.medium.url}
                        alt={data[0].attributes.titulo}
                        className="w-full h-auto rounded-sm"
                    />
                </article>
            </section>

            <section className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    slicedData.map((newData: Noticia) => {
                        const { titulo, subtitulo, slug, image } = newData.attributes
                        const { url } = image.data.attributes.formats.medium
                        return (
                            <ArticleNews slug={slug} subtitulo={subtitulo} titulo={titulo} url={url} key={newData.id} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default DeportesPage

