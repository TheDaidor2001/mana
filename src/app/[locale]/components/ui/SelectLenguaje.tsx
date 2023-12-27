"use client";

import { useLocale } from "next-intl";
import Link from "next-intl/link";
import { useState } from "react";
import Image from "next/image";

interface Props {
  lenguaje: string;
}

export default function SelectLenguage() {
  const [toggle, setToggle] = useState<boolean>(false);
  const locale = useLocale();

  const toggleLenguage = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative mt-5 md:mt-0 z-0 ">
        <button
          className="text-white flex items-center gap-1"
          onClick={() => toggleLenguage()}
        >
          {locale === "es" && (
            <Image
              width={20}
              height={5}
              className="w-5 h-5"
              src="/image/spain.png"
              alt="bandera de español"
            />
            
          )}
          {locale === "en" && (
            <Image
              width={20}
              height={5}
              className="w-5 h-5"
              src="/image/english.png"
              alt="bandera de español"
            />
          )}
          
        </button>
        <div
          className={` border border-gray-200 text-white text-center absolute w-16 top-10 rounded-lg p-3 left-0 ${
            toggle ? "flex flex-col gap-2" : "hidden"
          }`}
        >
          <Link href="/" locale="es" className="flex items-center gap-1 text-gray-950">
            <Image
              width={20}
              height={5}
              className="w-5 h-5"
              src="/image/spain.png"
              alt="bandera de español"
            />
            ES
          </Link>
          <Link href="/" locale="en" className="flex items-center gap-1 text-gray-950">
            <Image
              width={20}
              height={5}
              className="w-5 h-5"
              src="/image/english.png"
              alt="bandera de español"
            />
            EN
          </Link>
        </div>
      </div>
    </>
  );
}
