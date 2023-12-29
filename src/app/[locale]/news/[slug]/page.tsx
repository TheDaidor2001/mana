import Image from 'next/image';
import { useLocale } from 'next-intl'

import TitleIndex from '../../components/ui/TitleIndex';
import TitleNew from '../../components/ui/TitleNew';
import { fetchApi } from '@/helpers/fetch-api';
import { Noticia } from '@/interfaces/noticia.interfaces';
import notFound from '../../[...not-found]/page';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: {
    slug: string;
  };
}

const getPost = async (slug: string, locale: string) => {
  const path = "/noticias";
  const urlParamsObjet = {
    populate: "image",
    filters: {
      slug: slug,
    },
    locale,
  };

  const { data } = await fetchApi(path, urlParamsObjet);

  return data[0];
};


export default async function SlugNotices({params}:Props) {
  const locale = useLocale();
  const post: Noticia = await getPost(params.slug, locale);

  if (!post || Object.keys(post).length === 0) {
    return notFound();
  }
  
  const {contenido,filtros,image,titulo,subtitulo,fecha} = post.attributes
  const {url,height,width} = image.data.attributes.formats.medium
    
  return (
    <>
        
      <main>
      <section className='mt-10'>
          <TitleIndex title={filtros}/> 
          <h1 className='font-bold mt-10 mb-5 text-3xl lg:text-5xl '><span className='bg-yellow-400 rounded-md px-2 py-1 text-xs text-black font-bold mr-2'>M</span>{titulo}</h1>
          <p className='mt-2 text-md lg:text-xl my-10 text-gray-800'>{subtitulo}</p>
          <Image 
            height={height}
            width={width}
            alt={titulo}
            src={url}
            className='w-full h-auto mx-auto rounded-md'
          />

          <div className="prose-md lg:prose-lg mt-5 w-10/12">
            <MDXRemote source={contenido}/>
          </div>
          
        </section>

        <section className='my-20'>
            <TitleIndex title='Ultimas Noticias'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 mt-10'>
                <article className='flex flex-col gap-5'>
                    <div className='bg-red-500 w-full h-40'></div>
                    <TitleNew title='La Fiscalía constata que unos 200 menores migrantes fueron mezclados con adultos en Canarias'/>
                </article>
                <article className='flex flex-col gap-3'>
                    <div className='bg-red-500 w-full h-40'></div>
                    <TitleNew title='La Fiscalía constata que unos 200 menores migrantes fueron mezclados con adultos en Canarias'/>
                </article>
                <article className='flex flex-col gap-3'>
                    <div className='bg-red-500 w-full h-40'></div>
                    <TitleNew title='La Fiscalía constata que unos 200 menores migrantes fueron mezclados con adultos en Canarias'/>
                </article>
                <article className='flex flex-col gap-3'>
                    <div className='bg-red-500 w-full h-40'></div>
                    <TitleNew title='La Fiscalía constata que unos 200 menores migrantes fueron mezclados con adultos en Canarias'/>
                </article>
            </div>
        </section>
      </main>
    </>
  )
}
