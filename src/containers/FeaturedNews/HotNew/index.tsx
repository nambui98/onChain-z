import Card from '~/components/Card'

import { AdsFullWidth } from '~/components/Ads'
import { Heading1 } from '~/components/Heading'
import { ArticleListProp } from '~/types/types'

export default function HotNew({ articles, className }: ArticleListProp) {
  const list = articles
  if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>

  return (
    <div className={`HotNews relative ${className ?? ''}`}>
      <Heading1 text="Tin tức nổi bật" className="justify-center uppercase" />

      <div className="flex mt-10 sm-max:mt-4 sm-max:flex-wrap sm-max:gap-y-6">
        {list.slice(0, 4).map((r, index) => (
          <div className="flicking-panel w-1/3 px-3 sm-max:w-1/2" key={index}>
            <Card className="h-144px sm-max:h-94px" article={r} isNotShowAuthor={false} />
          </div>
        ))}
      </div>
    </div>
  )
}
