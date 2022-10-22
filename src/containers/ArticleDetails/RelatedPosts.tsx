import React from 'react';
import { AdsFullWidth } from '~/components/Ads'
import { ArticleCardTitleBelow } from '~/components/Article/ArticleCardView'

import { Heading2 } from '~/components/Heading'
import { ArticleListProp } from '~/types/types'

export default function RelatedPosts({ className, articles }: ArticleListProp) {
  const list = articles

  if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>
  return (
    <div className={`RelatedPosts relative ${className ?? ''}`}>
      <Heading2 text="BÀI VIẾT LIÊN QUAN" />

      <div className="mt-6 flex relative overflow-x-auto">
        {list.map((r, index) => (
          <div className=" w-1/3 mx-3 sm-max:min-w-17.5rem" key={index}>
            <ArticleCardTitleBelow classNameImage="  sm-max:w-17.5rem" article={r} />
          </div>
        ))}
      </div>
    </div>
  )
}
