import Link from "next-intl/link"
import { useLocale } from "next-intl"

interface Props {
    title: string,
    classes?: string,
    slug?: string,
}

export default function TitleNew(props: Props) {
    const {title, classes, slug} = props
    const locale = useLocale()
  return (
    <div>
      <Link
        href={`/news/${slug}`}
        locale={locale}
      >
        <h3 className={`${classes} font-bold`}><span className='bg-yellow-400 rounded-md px-2 py-1 text-xs text-black font-bold mr-2'>M</span>{title} </h3>
      </Link>
    </div>
  )
}
