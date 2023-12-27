

interface Props {
    title: string
}

export default function TitleIndex(props: Props) {

    const {title} = props
  return (
   <>
     <h3 className="font-extrabold text-3xl">{title}</h3>
      <div className='border-b border-gray-500 w-full mt-3'>
          <div className='bg-black w-60 h-1'/>
      </div>
   </>
  )
}
