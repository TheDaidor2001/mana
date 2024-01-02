'use client'

import { formatDate } from "@/helpers/formatdate";
import SelectLenguage from "./SelectLenguaje";
import Menu from '@/app/[locale]/components/images/Menu'
import Close from '@/app/[locale]/components/images/Close'
import Link from "next-intl/link";
import { useState } from "react";

interface Props {
  locale: string;
}

const date = new Date()



function Navbar(props: Props) {
  const { locale } = props;

  const [toggle, setToggle] = useState<Boolean>(false)
  
  
  return (
      <nav className="">
        <div className="flex justify-between items-center mb-10">
        <p className="text-sm  text-gray-800">{formatDate(date.toString(), locale)}</p>
        <SelectLenguage />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
          >
            <Menu />
          </button>
          <div className="flex-1">
              <Link
                href='/'
                locale={locale}
              >
                <h1 className="mx-auto text-center text-4xl font-bold">MANA</h1>
                <p className="text-center italic">Noticias de Guinea Ecuatorial</p>
              </Link>
          </div>
          {toggle && (
            <section className="h-screen w-2/3 md:w-1/3 lg:w-1/4 fixed top-0 py-5 px-10 left-0  bg-white shadow-lg shadow-black">
              <button
                onClick={() => setToggle(!toggle)}
                className="text-end"
              >
                <Close classes="w-8 h-8"/>
              </button>
            </section>
          )}
        </div>
      </nav>
  )
}

export default Navbar

