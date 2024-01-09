import { fetchApi } from "@/helpers/fetch-api";
import Separador from "./Separador";
import TitleIndex from "./TitleIndex";
import TitleNew from "./TitleNew";
import { useLocale } from "next-intl";
import { Noticia } from "@/interfaces/noticia.interfaces";
import Image from "next/image";
import { LinkCategory } from "./LinkCategory";

const getNews = async (start = 1, locale = "", pageSize = 4, info = "") => {
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


export default async function EmpresaSection() {

  const locale = useLocale()

  const { data } = await getNews(1, locale, 9, 'sociedad')


  return (
    <section className="my-20">
      <Separador />
      <TitleIndex title="Sociedad" />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10">
        {
          data.map((noticia: Noticia) => {
            const { titulo, slug, subtitulo, image, filtros } = noticia.attributes
            const { url, height, width } = image.data.attributes.formats.medium
            return (
              <article key={noticia.id}>

                <Image
                  height={height}
                  width={width}
                  alt={`Imagen de la noticia ${titulo}`}
                  src={url}
                  className="rounded"
                  loading="lazy"
                />

                <TitleNew slug={slug} classes="mt-5 text-md md:text-lg mb-3" title={titulo} />
                <LinkCategory filtros={filtros} locale={locale} />
                <p className='mt-5 text-sm text-gray-700'>{subtitulo}</p>

              </article>
            )
          })
        }

      </div>
    </section >
  )
}
