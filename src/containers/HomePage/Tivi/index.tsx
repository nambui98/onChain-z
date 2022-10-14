import { Heading2 } from '~/components/Heading'
import { Clip } from '~/services/ContentService'
import { CommonHtmlProps } from '~/types/types'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

interface Props extends CommonHtmlProps {
  clips: Clip[]
}

export default function Tivi({ clips, className }: Props) {
  const list = clips

  return (
    <div className={`Tivi sm-max:px-4 ${className ?? ''}`}>
      <Heading2 text="OnChainZ TV" />
      <div className="flex gap-x-8 mt-6 sm-max:flex-col">
        <LeftContent clip={list[0]} />
        <RightContent clips={list.slice(1, 6)} />
      </div>
    </div>
  )
}
