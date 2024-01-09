import { fetchApi } from "@/helpers/fetch-api";
import Separador from "./Separador";
import TitleIndex from "./TitleIndex";
import TitleNew from "./TitleNew";
import { useLocale } from "next-intl";
import Image from "next/image";

const getNews = async (start = 1, locale = "", pageSize = 9, info = "") => {
  const path = "/noticias";
  const urlParamsObjet = {
    populate: "image",
    sort: {
      createdAt: "asc",
    },
    filters: {
      filtros: info,
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


export default async function DeportesSection() {

  const locale = useLocale()

  const { data } = await getNews(1, locale, 9, 'deportes')

  return (
    <section className="my-20">
      <Separador />
      <TitleIndex title="Deportes" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
        <article>
          <Image
            width={80}
            height={60}
            alt={data[0].attributes.titulo}
            src={data[0].attributes.image.data.attributes.formats.medium.url}
            className="w-full h-auto"
            loading="lazy"
          />
          <TitleNew slug={data[0].attributes.slug} classes="mt-5 text-3xl" title={data[0].attributes.titulo} />
          <p className='my-2 text-md text-gray-700'>{data[0].attributes.subtitulo}</p>

        </article>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="border-r lg:border-gray-400">
            <article className="border-b border-gray-300 pb-5 mr-5">
              <TitleNew slug={data[1].attributes.slug} classes="mt-5 text-lg" title={data[1].attributes.titulo} />
              <p className='my-2 text-sm text-gray-700'>{data[1].attributes.subtitulo}</p>

            </article>
            <article className="border-b border-gray-300 pb-5 mr-5">
              <TitleNew slug={data[2].attributes.slug} classes="mt-5 text-lg" title={data[2].attributes.titulo} />
              <p className='my-2 text-sm text-gray-700'>{data[2].attributes.subtitulo}</p>

            </article>
          </div>
          <div>
            <article className="border-b border-gray-300 pb-5">
              <TitleNew slug={data[3].attributes.slug} classes="mt-5 text-lg" title={data[3].attributes.titulo} />
              <p className='my-2 text-sm text-gray-700'>{data[3].attributes.subtitulo}</p>

            </article>
            <article className="border-b border-gray-300 pb-5">
              <TitleNew slug={data[4].attributes.slug} classes="mt-5 text-lg" title={data[4].attributes.titulo} />
              <p className='my-2 text-sm text-gray-700'>{data[4].attributes.subtitulo}</p>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
