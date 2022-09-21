import { AutoPlay, Arrow } from '@egjs/flicking-plugins'
import Card from '~/components/Card'
// import './style.scss'

import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import { AdsFullWidth, AdsInline } from '~/components/Ads'
import { Heading1 } from '~/components/Heading'
import CardLarge from '~/components/CardLarge'
import { ButtonOutline, ButtonPrimary } from '~/components/Button'

export default function InDepthTopics({ articles, className }: ArticleListProp) {
  const list = articles
  if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>

  return (
    <div className={`HotNews relative ${className ?? ''}`}>
      <Heading1 text="chủ đề chuyên sâu" className="justify-center uppercase" />
      <div className="flex gap-8">
        <div className="mt-10 w-3/5 flex flex-col">
          <div>
            {list.slice(0, 4).map((r, index) => (
              <div className="px-3" key={index}>
                <CardLarge classNameImage="h-168px w-256px" article={r} isNotShowAuthor={false} />
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center">
            <ButtonPrimary className="w-40px h-40px rounded-lg font-normal" onClick={() => {}}>
              1
            </ButtonPrimary>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => {}}>
              2
            </ButtonOutline>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => {}}>
              3
            </ButtonOutline>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => {}}>
              ...
            </ButtonOutline>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => {}}>
              50
            </ButtonOutline>
          </div>
        </div>
        <div className="mt-10  w-352px ">
          <AdsInline className="!p-0 h-240px flex items-center justify-center">Three ads here</AdsInline>
          <div
            className={`Subscribe mt-6 p-x-6 h-196px bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col`}
            style={{
              backgroundImage: 'url("/assets/images/indepthTopic.png")',
            }}
          >
            <div className="text-2xl font-semibold text-white leading-34px">Keep update about OnChainz!</div>
            <form className="w-full mt-6">
              <label class="relative block">
                <input
                  placeholder="Your email adress"
                  type="email"
                  className="h-64px text-base font-semibold  w-full rounded-[32px] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                />
                <ButtonPrimary className="absolute" onClick={() => {}}>
                  Subscribe
                </ButtonPrimary>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
