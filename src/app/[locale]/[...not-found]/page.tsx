/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function notFound() {
  const locale = useLocale();
  return (
    <div className="flex flex-col lg:items-center justify-center sm:align-middle py-20 mb-10  h-full md:h-screen m-auto max-w-7xl mx-auto px-10 lg:px-0">
      <Image
        width={500}
        height={500}
        className="w-[500px] mx-auto"
        src="/image/404.svg"
        alt="https://storyset.com/web"
      />
      <h1 className="text-2xl lg:text-6xl text-center font-bold text-gray-800">
        ¡Vaya!, parece que te has perdido
      </h1>
      <Link
        href="/"
       locale={locale}
        className="bg-secondary px-10 py-2 lg:px-20 lg:py-2 rounded-md mt-5 text-white font-semibold text-lg text-center"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
