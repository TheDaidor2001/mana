
import Link from "next/link"

interface Props {
    urlPath: string,
    text: string,
    classes?: string
}

export const LinksPage = ({ text, urlPath, classes }: Props) => {
    return (
        <Link
            href={urlPath}
            className={`hover:underline transition-all text-sm ${classes}`}
        >{text}</Link>
    )
}
