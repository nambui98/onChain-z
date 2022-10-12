import { AutoPlay, Arrow } from '@egjs/flicking-plugins'
import Card from '~/components/Card'
// import './style.scss'

import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import { AdsFullWidth, AdsInline } from '~/components/Ads'
import { Heading1 } from '~/components/Heading'
import CardLarge from '~/components/CardLarge'
import { ButtonOutline, ButtonPrimary } from '~/components/Button'
import Paging from '~/components/Paging'

export default function InDepthTopics({ articles, className, url }: ArticleListProp & { url: any }) {
  {
    /* // TODO: Thach: em cần data post chủ đề chuyên sâu*/
  }
  const list = articles
  if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>
  {
    /* // TODO: Thach: Paging: URL param ?page=numberPage */
  }
  let pageIndexActive = parseInt(url.searchParams.get('page'))
  let currentURLOrigin = url.origin + url.pathname

  return (
    <div className={`HotNews relative ${className ?? ''}`}>
      <Heading1 text="chủ đề chuyên sâu" className="justify-center uppercase" />
      <div className="flex gap-8">
        <div className="mt-10 flex-1 flex flex-col">
          <div>
            {list.slice(0, 4).map((r, index) => (
              <div className="px-3" key={index}>
                <CardLarge classNameImage="h-168px w-256px" article={r} isNotShowAuthor={false} />
              </div>
            ))}
          </div>
          <Paging total={100} currentPage={pageIndexActive === 0 || !pageIndexActive ? 1 : pageIndexActive} pageSize={4} originURL={currentURLOrigin} />
        </div>
        <div className="mt-10 w-352px sm:w-200px md:w-352px">
          <AdsInline className="!p-0 h-240px flex items-center justify-center !w-full ">Three ads here</AdsInline>
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
                  placeholder="Your email address"
                  type="email"
                  className="h-64px text-base font-semibold  w-full rounded-[32px] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                />
                {/* // TODO: Thach: em cần api subscribe param: email */}
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
