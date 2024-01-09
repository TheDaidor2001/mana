
import Link from "next/link"

interface Props {
    urlPath: string,
    text: string,
    classes?: string,
    click?: () => void
}

export const LinksPage = ({ text, urlPath, classes, click }: Props) => {
    return (
        <Link
            href={urlPath}
            className={`hover:underline transition-all text-sm ${classes}`}
            onClick={click}
        >{text}</Link>
    )
}
