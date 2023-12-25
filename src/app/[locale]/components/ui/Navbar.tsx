'use client'

import { formatDate } from "@/helpers/formatdate";
import SelectLenguage from "./SelectLenguaje";
import Menu from '@/app/[locale]/components/images/Menu'

interface Props {
  locale: string;
}

const date = new Date()


function Navbar(props: Props) {
  const { locale } = props;
  
  return (
      <nav className="">
        <div className="flex justify-between items-center mb-10">
        <p className="text-sm  text-gray-800">{formatDate(date.toString(), locale)}</p>
        <SelectLenguage />
        </div>
        <div className="flex items-center">
          <Menu />
          <div className="flex-1">
              <h1 className="mx-auto text-center text-4xl font-bold">MANA</h1>
              <p className="text-center italic">Noticias de Guinea Ecuatorial</p>
          </div>
        
        </div>
      </nav>
  )
}

export default Navbar

