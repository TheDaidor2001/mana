import { useTranslations } from "next-intl"
import TitleIndex from "./TitleIndex"

interface Props {
    text: string
}

export const TopTextPages = ({ text }: Props) => {
    const t = useTranslations('Index')
    return (
        <>
            <TitleIndex title={t(`${text}`)} />
        </>

    )
}
