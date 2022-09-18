import { AutoPlay, Arrow } from '@egjs/flicking-plugins'
import Card from '~/components/Card'
// import './style.scss'

import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import { AdsFullWidth } from '~/components/Ads'
import { Heading1 } from '~/components/Heading'
import CardLarge from '~/components/CardLarge'

export default function InDepthTopics({ articles, className }: ArticleListProp) {

    const list = articles
    if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>

    return (
        <div className={`HotNews relative ${className ?? ''}`}>
            <Heading1 text="chủ đề chuyên sâu" className='justify-center uppercase' />

            <div className="flex mt-10">
                {list.slice(0, 4).map((r, index) => (
                    <div className="flicking-panel w-1/3 px-3" key={index}>
                        <CardLarge imageHeight='h-144px' article={r} isNotShowAuthor={false} />
                    </div>
                ))}
            </div>

        </div>
    )
}
