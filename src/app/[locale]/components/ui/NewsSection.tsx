import { fetchApi } from "@/helpers/fetch-api";
import TitleIndex from "./TitleIndex";
import TitleNew from "./TitleNew";
import { useLocale } from "next-intl";
import Image from "next/image";
import { LinkCategory } from "./LinkCategory";

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


export default async function NewsSections() {
  const locale = useLocale()

  const { data } = await getNews(1, locale, 9, 'geopolitica')



  return (
    <section className="my-20">
      <TitleIndex title="Geopolítica" />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-20 mt-10">
        <div className="flex flex-col gap-5">
          <article className="border-b border-gray-300 pb-5">
            <TitleNew slug={data[0].attributes.slug} classes='mt-5 text-lg' title={data[0].attributes.titulo} />
            <p className='my-2 text-md text-gray-700'>{data[0].attributes.subtitulo}</p>

          </article>
          <article className="border-b border-gray-300 pb-5">
            <Image
              width={80}
              height={60}
              alt={data[1].attributes.titulo}
              src={data[1].attributes.image.data.attributes.formats.medium.url}
              className="w-full h-auto"
              loading="lazy"
            />
            <TitleNew slug={data[1].attributes.slug} classes='mt-5 text-lg' title={data[1].attributes.titulo} />
            <p className='my-2 text-md text-gray-700'>{data[1].attributes.subtitulo}</p>

          </article>
          <article className="border-b border-gray-300 pb-5">
            <Image
              width={80}
              height={60}
              alt={data[2].attributes.titulo}
              src={data[2].attributes.image.data.attributes.formats.medium.url}
              className="w-full h-auto"
              loading="lazy"
            />
            <TitleNew slug={data[2].attributes.slug} classes='mt-5 text-lg' title={data[2].attributes.titulo} />
            <p className='my-2 text-md text-gray-700'>{data[2].attributes.titulo}</p>

          </article>
          <article className="pb-5">
            <TitleNew slug={data[3].attributes.slug} classes='mt-5 text-lg' title={data[3].attributes.titulo} />
            <p className='my-2 text-md text-gray-700'>{data[3].attributes.subtitulo}</p>

          </article>
        </div>
        <div className="flex flex-col gap-5">
          <article className="border-b border-gray-300 last:border-none pb-5">
            <Image
              width={80}
              height={60}
              alt={data[4].attributes.titulo}
              src={data[4].attributes.image.data.attributes.formats.medium.url}
              className="w-full h-auto"
              loading="lazy"
            />
            <TitleNew slug={data[4].attributes.slug} classes='mt-5 text-lg' title={data[4].attributes.titulo} />
            <p className='my-2 text-md 
            text-gray-700'>{data[4].attributes.subtitulo}</p>

          </article>
          <article className="border-b border-gray-300 pb-5">
            <TitleNew slug={data[5].attributes.slug} classes='mt-5 text-lg' title={data[5].attributes.titulo} />
            <p className='my-2 text-md text-gray-700'>{data[5].attributes.subtitulo}</p>

          </article>
          <article className="border-b border-gray-300 pb-5">
            <TitleNew slug={data[6].attributes.slug} classes='mt-5 text-lg' title={data[6].attributes.titulo} />
            <p className='my-2 text-md text-gray-700'>{data[6].attributes.subtitulo}</p>

          </article>
          <article className="pb-5">
            <Image
              width={80}
              height={60}
              alt={data[7].attributes.titulo}
              src={data[7].attributes.image.data.attributes.formats.medium.url}
              className="w-full h-auto"
              loading="lazy"
            />
            <TitleNew slug={data[7].attributes.slug} classes='mt-5 text-lg' title={data[7].attributes.titulo} />
            <p className='my-2 text-md text-gray-700'>{data[7].attributes.subtitulo}</p>

          </article>
        </div>
      </div>
    </section >
  )
}
