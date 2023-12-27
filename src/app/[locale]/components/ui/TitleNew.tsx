

interface Props {
    title: string,
    classes?: string
}

export default function TitleNew(props: Props) {
    const {title, classes} = props
  return (
    <div>
     <h3 className={`${classes} font-bold`}><span className='bg-yellow-400 rounded-md px-2 py-1 text-xs text-black font-bold mr-2'>M</span>{title} </h3>
    </div>
  )
}
