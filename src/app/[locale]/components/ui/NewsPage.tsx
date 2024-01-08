import Image from "next/image";
import { fetchApi } from "@/helpers/fetch-api";
import TitleNew from "./TitleNew";
import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import Separador from "./Separador";
import { Noticia } from '@/interfaces/noticia.interfaces';
import NewsSections from "./NewsSection";
import DeportesSection from "./DeportesSection";
import EmpresaSection from './EmpresaSection';
import { LinkCategory } from "./LinkCategory";
import { Header } from "./Header";


const getNews = async (start = 1, locale = "", pageSize = 3) => {
  const path = "/noticias";
  const urlParamsObjet = {
    populate: "image",
    sort: {
      createdAt: "asc",
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

const getOpinionNews = async (start = 1, locale = "", pageSize = 3) => {
  const path = "/noticias";
  const urlParamsObjet = {
    populate: "image",
    sort: {
      createdAt: "asc",
    },
    filters: {
      filtros: 'opinion',
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



export default async function NewsPage() {

  const locale = useLocale()

  const { data } = await getNews(1, locale, 3)
  const { data: opinionData } = await getOpinionNews(1, locale, 3)
  const firstNew = data[0].attributes
  const slicedData = data.slice(1)





  return (
    <main className="max-w-7xl mx-auto px-5">
      <Header />
      <section className='flex flex-col-reverse xl:grid xl:grid-cols-4 grid-flow-row-dense mt-10 gap-10'>

        <div className='flex flex-col border-t xl:border-t-transparent pt-5 xl:pt-0 xl:border-r border-gray-300 gap-5'>
          {
            slicedData.map((newData: Noticia) => {
              const { titulo, subtitulo, slug, filtros } = newData.attributes
              return (
                <div className='row-span-1 mr-5' key={newData.id}>
                  <TitleNew slug={slug} classes='text-lg' title={titulo} />
                  <p className='mt-2 text-md text-gray-700 mb-2'>{subtitulo}</p>
                  <LinkCategory filtros={filtros} locale={locale} />
                </div>
              )
            })
          }
        </div>
        <div className='col-span-2'>
          <Image
            width={300}
            height={310}
            className="w-full h-auto"
            alt={firstNew.titulo}
            src={firstNew.image.data.attributes.formats.medium.url}
          />
          <TitleNew slug={firstNew.slug} classes='mt-5 text-2xl xl:text-3xl' title={firstNew.titulo} />
          <p className='my-2 text-md text-gray-700'>{firstNew.subtitulo}</p>
          <LinkCategory filtros={firstNew.filtros} locale={locale} />
        </div>
        <div className='hidden border-t-8 border-black xl:flex flex-col gap-5'>
          <h2 className='font-extrabold text-3xl mt-3'>Opinión</h2>
          <div className='border-b border-gray-300 w-full mt-3'>
            <div className='bg-black w-60 h-1' />
          </div>
          {opinionData.map((newData: Noticia) => {
            const { titulo, subtitulo, slug, filtros } = newData.attributes
            return (
              <article key={newData.id}>
                <TitleNew slug={slug} classes='text-lg' title={titulo} />
                <p className='my-2 text-md text-gray-700'>{subtitulo}</p>
                <LinkCategory filtros={filtros} locale={locale} />
              </article>
            )
          })}
        </div>
      </section>
      <Separador />

      <NewsSections />

      <DeportesSection />

      <EmpresaSection />
    </main>
  )
}
