import { fetchApi } from "@/helpers/fetch-api";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Noticia } from "@/interfaces/noticia.interfaces";
import ArticleNews from "../components/ui/ArticleNews";
import TitleNew from "../components/ui/TitleNew";
import { TopTextPages } from "../components/ui/TopTextPages";


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
            filtros: 'sociedad',
        },
        pagination: {
            page: start,
            pageSize: pageSize,
        },
        locale,
    };

    const { data } = await fetchApi(path, urlParamsObjet);
    throw Error('error')
    return {
        data,
    };
};

async function Sociedad() {
    const locale = useLocale()

    const { data } = await getOpinionNews(1, locale);
    const slicedData = data.slice(1)


    return (
        <>
            <section className="py-10">
                <TopTextPages text="header-text-3" />
                <article className=" border-b border-gray-600 flex flex-col gap-10 lg:flex-row space-y-10 py-10">
                    <div className="m-auto">
                        <h1 className="border-b text-xl text-text-pretty font-extrabold mb-10">Última Noticia</h1>
                        <TitleNew slug={data[0].attributes.slug} classes='text-4xl' title={data[0].attributes.titulo} />
                        <p className="mt-5 text-lg text-gray-800 font-light text-balance">{data[0].attributes.subtitulo}</p>
                    </div>
                    <Image
                        height={500}
                        width={500}
                        src={data[0].attributes.image.data.attributes.formats.medium.url}
                        alt={data[0].attributes.titulo}
                        className="w-full h-auto rounded-md"
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

export default Sociedad

