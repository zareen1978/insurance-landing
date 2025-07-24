import clsx from 'clsx'
import {FC, ReactNode} from 'react'

interface InfoBoxProps {
  children: ReactNode
  image: string
  isFlexCol?: boolean
}

const InfoBox: FC<InfoBoxProps> = ({children, image, isFlexCol = false}) => {
  return (
    <div
      className={clsx('flex flex-col sm:flex-row text-center sm:text-left items-center gap-2', {
        '!flex-col': isFlexCol,
      })}
    >
      <img src={image} alt="about not found" />
      <p className="font-semibold text-sm sm:text-lg leading-tight">{children}</p>
    </div>
  )
}

export default InfoBox
