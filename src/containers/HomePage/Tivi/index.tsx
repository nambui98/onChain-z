
import { Heading2 } from '~/components/Heading'
import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function Tivi({ articles, className }: ArticleListProp) {
  const list = articles

  return (
    <div className={`Tivi sm-max:px-4 ${className ?? ''}`}>
      <Heading2 text="OnChainZ TV" />
      <div className="flex gap-x-8 mt-6 sm-max:flex-col">
        <LeftContent article={list[0]} />
        <RightContent articles={list.slice(1, 6)} />
      </div>
    </div>
  )
}
