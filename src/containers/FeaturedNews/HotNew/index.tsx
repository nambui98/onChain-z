import Card from '~/components/Card'

import { AdsFullWidth } from '~/components/Ads'
import { Heading1 } from '~/components/Heading'
import { ArticleListProp } from '~/types/ArticleComponentProps.type'

export default function HotNew({ articles, className }: ArticleListProp) {

  const list = articles
  if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>

  return (
    <div className={`HotNews relative ${className ?? ''}`}>
      <Heading1 text="Tin tức nổi bật" className='justify-center uppercase' />

      <div className="flex mt-10">
        {list.slice(0, 4).map((r, index) => (
          <div className="flicking-panel w-1/3 px-3" key={index}>
            <Card imageHeight='h-144px' article={r} isNotShowAuthor={false} />
          </div>
        ))}
      </div>

    </div>
  )
}
