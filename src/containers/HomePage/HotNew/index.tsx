// import Flicking from "@egjs/preact-flicking";
import Heading2 from '~/components/Heading'
import InfiniteFlicking from './InfiniteFlicking'

import Flicking from '@egjs/preact-flicking'
import { AutoPlay, Arrow } from '@egjs/flicking-plugins'
import Card from '~/components/Card'
import './style.scss'

import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import { AdsFullWidth } from '~/components/Ads'

export default function HotNew({ articles, className }: ArticleListProp) {
  let plugins
  if (typeof window !== 'undefined') {
    plugins = [new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false }), new Arrow({ parentEl: document.body })]
  }

  const list = articles
  if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>

  return (
    <div className={`HotNews relative ${className ?? ''}`}>
      <Heading2 name="Tin tức nổi bật" />

      <Flicking className="mt-6" gap={20} bound={true} infinite={true} infiniteThreshold={50} plugins={plugins}>
        {list.map((r, index) => (
          <div className="flicking-panel w-1/3 px-3" key={index}>
            <Card article={r} />
          </div>
        ))}
        {/* {panels.map(index => <Card className="flicking-panel w-500px" key={index}>{index + 1}</Card>)} */}
      </Flicking>

      <span className="flicking-arrow-prev bg-white flex items-center justify-center mt-[-20px]">
        <img className="w-24px h-24px m-0" src="/assets/icons/arrow-left.svg" alt="" />
      </span>
      <span className="flicking-arrow-next bg-white flex items-center justify-center mt-[-20px]">
        <img className="w-24px h-24px m-0" src="/assets/icons/arrow-right.svg" alt="" />
      </span>
    </div>
  )
}
