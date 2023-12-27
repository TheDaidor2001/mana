import { fetchApi } from "@/helpers/fetch-api";
import TitleNew from "./TitleNew";
import { useLocale } from "next-intl";
import Separador from "./Separador";
import TitleIndex from "./TitleIndex";


const getNews = async (start = 1, locale = "", pageSize = 4) => {
  const path = "/noticias";
  const urlParamsObjet = {
    populate: "images",
    sort: {
      createdAt: "desc",
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

    const {data} = await getNews(1, locale, 4)

    
    
  return (
    <main className="max-w-7xl mx-auto px-5">
      <section className='flex flex-col-reverse xl:grid xl:grid-cols-4 grid-flow-row-dense mt-10 gap-10'>
          <div className='flex flex-col border-t xl:border-t-transparent pt-5 xl:pt-0 xl:border-r border-gray-300 gap-5'>
            <div className='row-span-1 mr-5'>
              <TitleNew classes='text-lg' title={'El Gobierno prepara una prórroga parcial de seis meses de las medidas contra la crisis energética'}/>
              <p className='mt-2 text-md text-gray-700'>Mantendrá adaptadas las ayudas al transporte, seguirá con las rebajas energéticas aunque de forma graduada y retirará subvenciones.</p>
            </div>
            <div>
              <TitleNew classes='text-xl' title={'La economía resiste en 2023 gracias al turismo y el empleo'}/>
              <p className='mt-2 text-md text-gray-700'>El fin de las subidas de tipos de interés, el auge de la inteligencia artificial y el récord de beneficios de la banca son algunos hitos del año.</p>
            </div>
          </div>
          <div className='col-span-2'>
            <div
              className='bg-red-500 w-full h-[310px] rounded-sm mx-auto xl:mx-0'
            ></div>
            <TitleNew classes='mt-5 text-4xl xl:text-2xl' title={'Sobrevivir para informar: los periodistas de Gaza, víctimas y testigos únicos '}/>
            <p className='mt-2 text-md text-gray-700'>El fin de las subidas de tipos de interés, el auge de la inteligencia artificial y el récord de beneficios de la banca son algunos hitos del año.</p>
          </div>
          <div className='hidden border-t-8 border-black xl:flex flex-col gap-5'>
            <h2 className='font-extrabold text-3xl mt-3'>Opinión</h2>
            <div className='border-b border-gray-300 w-full mt-3'>
              <div className='bg-black w-60 h-1'/>
            </div>
            <article>
              <TitleNew classes="text-lg" title={'La economía resiste en 2023 gracias al turismo y el empleo'}/>
              <p className='mt-2 text-md text-gray-700'>El fin de las subidas de tipos de interés, el auge de la inteligencia artificial y el récord de beneficios de la banca son algunos hitos del año.</p>
              
            </article>
            <article>
              <TitleNew  classes='text-lg' title={'La economía resiste en 2023 gracias al turismo y el empleo'}/>
              <p className='mt-2 text-md text-gray-700'>El fin de las subidas de tipos de interés, el auge de la inteligencia artificial y el récord de beneficios de la banca son algunos hitos del año.</p>
              
            </article>
          </div>
      </section>
    <Separador />
    
    <section className="my-20">
     <TitleIndex title="Actualidad"/>
     <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-20 mt-10">
       <div className="flex flex-col gap-5">
          <article className="border-b border-gray-300 pb-5">
            <TitleNew classes='mt-5 text-lg' title={'Sobrevivir para informar: los periodistas de Gaza, víctimas y testigos únicos '}/>
            <p className='mt-2 text-md text-gray-700'>La fiscal superior de las islas, María Farnés, convocará una cumbre con las administraciones para proponer cambios en el protocolo tras las “lecciones” dejadas por la crisis de El Hierro</p>
          </article>
          <article className="border-b border-gray-300 pb-5">
            <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
            <h3 className="text-xl font-bold mt-2">Carlos Cuerpo: la condonación a Cataluña “ayuda a la sostenibilidad de la deuda del Estado”</h3>
            <p className='mt-2 text-md text-gray-700'>La fiscal superior de las islas, María Farnés, convocará una cumbre con las administraciones para proponer cambios en el protocolo tras las “lecciones” dejadas por la crisis de El Hierro</p>
          </article>
          <article className="border-b border-gray-300 pb-5">
            <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
            <TitleNew classes='mt-5 text-lg' title="La censura en redes de la solidaridad con Palestina se dispara con la guerra en Gaza"/>
            <p className='mt-2 text-md text-gray-700'>Usuarios y grupos de derechos denuncian restricciones y supresiones desproporcionadas de voces en favor de Palestina, mientras el discurso del odio en hebreo se propaga en paralelo</p>
          </article>
          <article className="border-b border-gray-300 pb-5">
            <TitleNew classes='mt-5 text-lg' title="Niall Ferguson: “Rusia puede ganar la guerra. La política exterior de Biden ha sido un fracaso”"/>
            <p className='mt-2 text-md text-gray-700'>El historiador critica la incapacidad de disuadir los ataques de talibanes, Putin y Hamás y alerta del impacto de la IA sobre las capacidades cognitivas</p>
          </article>
       </div>
       <div className="flex flex-col gap-5">
          <article className="border-b border-gray-300 last:border-none pb-5">
            <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
            <TitleNew classes='mt-5 text-lg' title={'Sobrevivir para informar: los periodistas de Gaza, víctimas y testigos únicos '}/>
            <p className='mt-2 text-md text-gray-700'>La fiscal superior de las islas, María Farnés, convocará una cumbre con las administraciones para proponer cambios en el protocolo tras las “lecciones” dejadas por la crisis de El Hierro</p>
          </article>
          <article className="border-b border-gray-300 pb-5">
            <h3 className="text-xl font-bold mt-2">Carlos Cuerpo: la condonación a Cataluña “ayuda a la sostenibilidad de la deuda del Estado”</h3>
            <p className='mt-2 text-md text-gray-700'>La fiscal superior de las islas, María Farnés, convocará una cumbre con las administraciones para proponer cambios en el protocolo tras las “lecciones” dejadas por la crisis de El Hierro</p>
          </article>
          <article className="border-b border-gray-300 pb-5">
            <TitleNew classes='mt-5 text-lg' title="La censura en redes de la solidaridad con Palestina se dispara con la guerra en Gaza"/>
            <p className='mt-2 text-md text-gray-700'>Usuarios y grupos de derechos denuncian restricciones y supresiones desproporcionadas de voces en favor de Palestina, mientras el discurso del odio en hebreo se propaga en paralelo</p>
          </article>
          <article className="border-b border-gray-300 pb-5">
          <div className  ="bg-red-500 w-full h-60 rounded-sm mx-auto xl:mx-0" />
            <TitleNew classes='mt-5 text-lg' title="Niall Ferguson: “Rusia puede ganar la guerra. La política exterior de Biden ha sido un fracaso”"/>
            <p className='mt-2 text-md text-gray-700'>El historiador critica la incapacidad de disuadir los ataques de talibanes, Putin y Hamás y alerta del impacto de la IA sobre las capacidades cognitivas</p>
          </article>
       </div>
     </div>
    </section>

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
