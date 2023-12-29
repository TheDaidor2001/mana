import Image from "next/image";
import { fetchApi } from "@/helpers/fetch-api";
import TitleNew from "./TitleNew";
import { useLocale } from "next-intl";
import Link from "next-intl/link";
import Separador from "./Separador";
import TitleIndex from "./TitleIndex";
import { Noticia } from '@/interfaces/noticia.interfaces';
import NewsSections from "./NewsSection";


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

    const {data} = await getNews(1, locale, 3)
    const {data: opinionData} = await getOpinionNews(1, locale, 3)
    const firstNew = data[0].attributes
    const slicedData = data.slice(1)
    
    

    
    
  return (
    <main className="max-w-7xl mx-auto px-5">
      <section className='flex flex-col-reverse xl:grid xl:grid-cols-4 grid-flow-row-dense mt-10 gap-10'>
          
          <div className='flex flex-col border-t xl:border-t-transparent pt-5 xl:pt-0 xl:border-r border-gray-300 gap-5'>
            {
              slicedData.map((newData: Noticia) => {
                const {titulo,subtitulo,slug} = newData.attributes
                return (
                  <div className='row-span-1 mr-5' key={newData.id}>
                     <Link
                        href={`/news/${slug}`}
                      >

                      <TitleNew classes='text-lg hover:text-yellow-500 transition-colors' title={titulo}/>
                    </Link>
                    <p className='mt-2 text-md text-gray-700'>{subtitulo}</p>
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
              <Link
                href={`/news/${firstNew.slug}`}
              >
                <TitleNew classes='mt-5 text-4xl xl:text-2xl hover:text-yellow-500 transition-colors' title={firstNew.titulo}/>
              </Link>
              <p className='mt-2 text-md text-gray-700'>{firstNew.subtitulo}</p>
          </div>
          <div className='hidden border-t-8 border-black xl:flex flex-col gap-5'>
            <h2 className='font-extrabold text-3xl mt-3'>Opinión</h2>
            <div className='border-b border-gray-300 w-full mt-3'>
              <div className='bg-black w-60 h-1'/>
            </div>
            {opinionData.map((newData: Noticia) => {
              const {titulo,subtitulo,slug} = newData.attributes
              return (
                <article key={newData.id}>
                  <Link href={`/news/${slug}`}>
                    <TitleNew  classes='text-lg hover:text-yellow-500 transition-colors' title={titulo}/>
                  </Link>
                  <p className='mt-2 text-md text-gray-700'>{subtitulo}</p>
                </article>
              )
            })} 
          </div>
      </section>
    <Separador />
    
    <NewsSections />

    <section className="my-20">
     <Separador /> 
     <TitleIndex title="Deportes"/>
     <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
        <article>
          <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
          <TitleNew classes="mt-5 text-3xl" title="Sergio Asenjo: “Echo de menos el fútbol y el vestuario”"/>
          <p className='mt-2 text-md text-gray-700'>El portero, exinternacional y con 17 años en Primera, se encuentra sin equipo a la espera de que le salga una oportunidad en el mercado invernal.</p>
        </article>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="border-r lg:border-gray-400">
            <article className="border-b border-gray-300 pb-5 mr-5">
              <TitleNew classes="mt-5 text-lg" title="Sergio Asenjo: “Echo de menos el fútbol y el vestuario”"/>
              <p className='mt-2 text-sm text-gray-700'>El portero, exinternacional y con 17 años en Primera, se encuentra sin equipo a la espera de que le salga una oportunidad en el mercado invernal.</p>
            </article>
            <article className="border-b border-gray-300 pb-5 mr-5">
              <TitleNew classes="mt-5 text-lg" title="Sergio Asenjo: “Echo de menos el fútbol y el vestuario”"/>
              <p className='mt-2 text-sm text-gray-700'>El portero, exinternacional y con 17 años en Primera, se encuentra sin equipo a la espera de que le salga una oportunidad en el mercado invernal.</p>
            </article>
          </div>
          <div>
            <article className="border-b border-gray-300 pb-5">
              <TitleNew classes="mt-5 text-lg" title="Sergio Asenjo: “Echo de menos el fútbol y el vestuario”"/>
              <p className='mt-2 text-sm text-gray-700'>El portero, exinternacional y con 17 años en Primera, se encuentra sin equipo a la espera de que le salga una oportunidad en el mercado invernal.</p>
            </article>
            <article className="border-b border-gray-300 pb-5">
              <TitleNew classes="mt-5 text-lg" title="Sergio Asenjo: “Echo de menos el fútbol y el vestuario”"/>
              <p className='mt-2 text-sm text-gray-700'>El portero, exinternacional y con 17 años en Primera, se encuentra sin equipo a la espera de que le salga una oportunidad en el mercado invernal.</p>
            </article>
          </div>
        </div>
     </div>
    </section>

    <section className="my-20">
      <Separador />
      <TitleIndex title="Empresas"/>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10">
        <article>
          <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
          <TitleNew classes="mt-5 text-2xl md:text-2xl" title="El jefe del ejército de Ucrania desafía a Zelenski sobre la estrategia de reclutamiento”"/>
          <p className='mt-2 text-md text-gray-700'>El portero, exinternacional y con 17 años en Primera, se encuentra sin equipo a la espera de que le salga una oportunidad en el mercado invernal.</p>
        </article>
        <article>
          <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
          <TitleNew classes="mt-5 text-2xl md:text-2xl" title="Sergio Asenjo: “Echo de menos el fútbol y el vestuario”"/>
          <p className='mt-2 text-md text-gray-700'>Valeri Zaluzhni, cada vez más alejado del presidente, asegura estar insatisfecho con las oficinas encargadas de movilizar a los soldados</p>
        </article>
        <article>
          <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
          <TitleNew classes="mt-5 text-2xl md:text-2xl" title="Una ola migratoria “sin precedentes” pone a prueba las relaciones entre México y EE UU”"/>
          <p className='mt-2 text-md text-gray-700'>Los secretarios de Estado y de Seguridad estadounidenses visitan de nuevo a López Obrador</p>
        </article>
        <article>
          <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
          <TitleNew classes="mt-5 text-2xl md:text-2xl" title="Víctimas de abusos en la Iglesia boliviana: “Nos enfrentamos a una institución que lleva 500 años tapando denuncias””"/>
          <p className='mt-2 text-md text-gray-700'>Nace la primera asociación nacional de víctimas de pederastia clerical en Bolivia, que ya contabiliza medio millar de afectados</p>
        </article>
      </div>
    </section >
  </main>
  )
}
