import { Noticia } from "@/interfaces/noticia.interfaces";
import Image from "next/image";
import TitleNew from "./TitleNew";

interface Props {
    noticia: Noticia[];
}

export const LastNews = ({ noticia }: Props) => {
    return (
        <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 mt-10'>

            {
                noticia.map((noticia: Noticia) => {
                    const { titulo, slug, image, subtitulo } = noticia.attributes;
                    const { url, height, width } = image.data.attributes.formats.medium
                    return (

                        <article className='flex flex-col items-center gap-5 max-h-none lg:max-h-44' key={titulo}>
                            <div className='object-cover'>
                                <Image
                                    height={height}
                                    width={width}
                                    alt={titulo}
                                    src={url}
                                    className='w-full h-auto rounded-md'
                                />
                            </div>
                            <TitleNew slug={slug} title={titulo} />
                            <p className='text-sm text-gray-800'>{subtitulo}</p>
                        </article>
                    )
                })
            }

        </div>
    )
}
