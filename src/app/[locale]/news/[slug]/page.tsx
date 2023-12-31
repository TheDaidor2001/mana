import Image from 'next/image';
import { useLocale } from 'next-intl'
import TitleIndex from '../../components/ui/TitleIndex';
import { fetchApi } from '@/helpers/fetch-api';
import { Noticia } from '@/interfaces/noticia.interfaces';
import notFound from '../../[...not-found]/page';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { LastNews } from '../../components/ui/LastNews';



interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  try {
    const path = "/noticias";
    const urlParamsObjet = {
      populate: "image",
      filters: {
        slug: params.slug,
      },
      locale: "es",
    };

    const { data } = await fetchApi(path, urlParamsObjet);

    return {
      title: `Mana - ${data[0].attributes.titulo}`,
      description: data[0].attributes.subtitulo,
      keywords: `Mana, Noticias, Guinea Ecuatorial, África, ${data[0].attributes.filtros}`
    }
  } catch (error) {
    return {
      title: 'Noticia de Malabo Nations',
      description: 'Noticia de Malabo Nations',
    }
  }
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

const getNews = async (start = 1, locale = "", pageSize = 4) => {
  const path = "/noticias";
  const urlParamsObjet = {
    populate: "image",
    sort: {
      createdAt: "desc",
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


export default async function SlugNotices({ params }: Props) {
  const locale = useLocale();
  const post: Noticia = await getPost(params.slug, locale);
  const { data } = await getNews(1, locale);





  if (!post || Object.keys(post).length === 0) {
    return notFound();
  }

  const { contenido, filtros, image, titulo, subtitulo, fecha } = post.attributes
  const { url, height, width } = image.data.attributes.formats.medium

  return (
    <>

      <main>
        <section className='mt-10'>
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
            <MDXRemote source={contenido} />
          </div>

        </section>

        <section className='my-20'>
          <TitleIndex title='Ultimas Noticias' />
          <LastNews noticia={data} />
        </section>
      </main>
    </>
  )
}
