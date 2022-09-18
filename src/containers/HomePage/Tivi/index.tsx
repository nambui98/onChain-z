
import { Heading2 } from '~/components/Heading'
import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function Tivi({ articles, className }: ArticleListProp) {
  const list = articles

  return (
    <div className={`Tivi ${className ?? ''}`}>
      <Heading2 name="OnChainZ TV" />
      <div className="flex gap-x-8 mt-6">
        <LeftContent article={list[0]} />
        <RightContent articles={list.slice(1, 6)} />
      </div>
    </div>
  )
}
