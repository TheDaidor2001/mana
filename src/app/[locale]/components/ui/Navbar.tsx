'use client'

import { formatDate } from "@/helpers/formatdate";
import SelectLenguage from "./SelectLenguaje";

interface Props {
  locale: string;
}

const date = new Date()


function Navbar(props: Props) {
  const { locale } = props;
  
  return (
      <nav className="flex justify-between items-center">
        <p className="text-sm  text-red-500">{formatDate(date.toString(), locale)}</p>
        <SelectLenguage />
      </nav>
  )
}

export default Navbar

