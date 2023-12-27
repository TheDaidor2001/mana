import Image from 'next/image'
import Navbar from '@/app/[locale]/components/ui/Navbar';


import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'
import Link from 'next-intl/link';
import NewsPage from '@/app/[locale]/components/ui/NewsPage';
import Footer from '@/app/[locale]/components/ui/Footer';
import TitleIndex from '../../components/ui/TitleIndex';
import TitleNew from '../../components/ui/TitleNew';

export default function SlugNotices() {
    const locale = useLocale()
    const messages = useMessages()
  return (
    <>
        <header className="max-w-7xl mx-auto mt-20">
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale}/>
        </NextIntlClientProvider>
      </header>

      <section className='mt-10'>
        <TitleIndex title='Economía'/> 
        <h1 className='font-bold mt-10 mb-5 text-3xl lg:text-5xl '><span className='bg-yellow-400 rounded-md px-2 py-1 text-xs text-black font-bold mr-2'>M</span>Las grandes empresas empiezan a compensar la pérdida de poder adquisitivo de sus empleados </h1>
        <p className='mt-2 text-md lg:text-xl my-10 text-gray-800'>Los nuevos convenios de sectores como la banca, las ‘telecos’, las aerolíneas y la distribución recogen aumentos impensables antes de la pandemia para recuperar poder adquisitivo</p>
        <div className='bg-red-500 w-full h-[500px]'></div>
       <div className='flex-col px-20 mt-10 font-bold'>

       </div>
        <p className='mt-5 p-5 lg:px-20 text-lg mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum semper ante, id congue magna. Mauris blandit velit a ligula gravida, sit amet bibendum tortor feugiat. Sed vel diam ligula. Nam non lorem porta, sodales magna tempor, placerat magna. Donec quis mi dui. Suspendisse fermentum diam sit amet ex viverra, quis pharetra velit ultrices. Maecenas vel ultricies sapien.

            Sed id velit sit amet odio condimentum fringilla. Praesent convallis aliquet nisi, ac mollis nisi rutrum et. Sed tincidunt turpis orci, id sagittis purus scelerisque vitae. Ut sit amet purus sed libero vestibulum blandit. Suspendisse pharetra dolor sit amet erat rhoncus, id eleifend libero venenatis. Fusce arcu metus, vulputate in neque id, condimentum faucibus tellus. Suspendisse potenti. Vivamus imperdiet leo ac turpis mollis mattis nec ut libero.

            Curabitur sit amet sodales ligula, a cursus metus. Nullam condimentum condimentum neque, vel luctus ex egestas et. Proin mi erat, volutpat in tellus sed, placerat rutrum felis. Vestibulum id viverra turpis. Donec ac lorem eu neque fermentum vehicula ac quis mauris. Curabitur gravida metus velit, a auctor ligula pulvinar quis. Cras et pellentesque mi. Aliquam erat volutpat. Integer pulvinar interdum mi, a vulputate enim rutrum eu. Proin id mi vel quam sodales scelerisque et in metus. Nam molestie, purus id posuere venenatis, sapien enim maximus est, ac semper tellus felis id erat. Curabitur vulputate lorem nec dolor laoreet pretium. Aenean nec ante mi. Donec convallis a mauris a auctor.

            Nullam nec malesuada ex. Vestibulum in tellus suscipit turpis dapibus venenatis luctus sed orci. Vivamus gravida libero magna, nec porta neque congue quis. Vivamus eu sapien tempor orci posuere accumsan in quis nisi. Suspendisse finibus mattis tortor quis bibendum. Sed et erat lobortis, cursus odio id, feugiat augue. Sed mi sapien, dapibus et tellus vitae, placerat consectetur justo. Nunc pulvinar ante dui, a bibendum eros commodo vel. Phasellus id lobortis nibh, a tristique orci. In justo dolor, dapibus vel auctor et, tempus a magna. Nunc leo diam, interdum rutrum gravida sit amet, hendrerit vel odio. Vestibulum ligula ligula, elementum vel risus ut, cursus eleifend eros. Mauris aliquam tellus ultrices, consequat sem in, congue tellus. Curabitur nec aliquet nunc, eu viverra quam.

            Integer in ex sodales arcu venenatis aliquam eget sed orci. Integer commodo quam nec turpis tincidunt egestas. Phasellus id convallis elit. Phasellus consectetur nibh quis mi imperdiet, quis posuere nibh ullamcorper. Nullam sagittis, ante sollicitudin fermentum dictum, ante arcu tincidunt tortor, non vehicula nisi lectus porttitor sapien. Donec pulvinar magna at erat mattis luctus vel sed lorem. Aenean eget velit sagittis, mattis magna non, consequat velit.

            Pellentesque id urna eu odio fringilla maximus ut nec dui. Nulla euismod dolor orci, at feugiat enim commodo ornare. Fusce consequat, odio in euismod lobortis, mauris purus posuere erat, non molestie arcu diam sed erat. Sed id nisi eget lectus ultricies volutpat. Sed ac pulvinar dui. Nam ornare tincidunt quam id molestie. Phasellus sollicitudin metus odio, ut iaculis sem varius eu. Nulla fermentum, turpis sed sagittis feugiat, nisi mi finibus enim, et malesuada ipsum justo quis nulla. Aenean pharetra egestas lorem, vitae tempor orci. Mauris vehicula, neque a luctus pharetra, tortor dui rutrum orci, pellentesque vestibulum ex erat at mi. Quisque sit amet laoreet lectus. Aliquam magna nisl, venenatis at urna id, egestas lobortis augue. Vivamus augue est, lacinia sit amet efficitur hendrerit, elementum a orci. Vestibulum vehicula nec dui id ultricies. In hac habitasse platea dictumst.
        </p>
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
      <Footer />
    </>
  )
}
