// import Flicking from "@egjs/preact-flicking";
import React from 'react';
import InfiniteFlicking from './InfiniteFlicking'

import Flicking from '@egjs/preact-flicking'
import { AutoPlay, Arrow } from '@egjs/flicking-plugins'
import { ArticleCardTitleBelow } from '~/components/Article/ArticleCardView'
import './style.scss'

import { ArticleListProp } from '~/types/types'
import { AdsFullWidth } from '~/components/Ads'
import { Heading2 } from '~/components/Heading'

export default function HotNew({ articles, className }: ArticleListProp) {
  let plugins
  if (typeof window !== 'undefined') {
    plugins = [new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false }), new Arrow({ parentEl: document.body })]
  }

  const list = articles

  if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>

  return (
    <div className={`HotNews sm-max:px-4 relative ${className ?? ''}`}>
      <Heading2 text="Tin tức nổi bật" />

      <Flicking className="mt-6" gap={20} bound={true} infinite={true} infiniteThreshold={50} plugins={plugins}>
        {list.map((r, index) => (
          <div className="flicking-panel w-1/3 sm-max:w-280px px-3" key={index}>
            <ArticleCardTitleBelow className="sm-max:h-157px" article={r} />
          </div>
        ))}
      </Flicking>

      <span className="flicking-arrow-prev bg-white flex items-center justify-center mt-[-20px]">
        <img className="w-24px h-24px m-0" src="/assets/icons/arrow-left.svg" alt="scroll left" />
      </span>
      <span className="flicking-arrow-next bg-white flex items-center justify-center mt-[-20px]">
        <img className="w-24px h-24px m-0" src="/assets/icons/arrow-right.svg" alt="scroll right" />
      </span>
    </div>
  )
}
