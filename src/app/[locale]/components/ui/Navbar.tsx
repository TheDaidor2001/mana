'use client'

import { formatDate } from "@/helpers/formatdate";
import SelectLenguage from "./SelectLenguaje";
import Menu from '@/app/[locale]/components/svg/menu';

interface Props {
  locale: string;
}

const date = new Date()


function Navbar(props: Props) {
  const { locale } = props;
  
  return (
      <nav >
        <div className="flex justify-between items-center">
        <p className="text-sm  text-gray-800">{formatDate(date.toString(), locale)}</p>
        <SelectLenguage />
        </div>
        <div className="flex items-center">
          <Menu />
          <div className="flex-1">
              <h1 className="mx-auto text-center text-4xl mt-5 font-bold">MANA</h1>
              <p className="text-center italic">Noticias de Guinea Ecuatorial</p>
          </div>
        
        </div>
      </nav>
  )
}

export default Navbar

