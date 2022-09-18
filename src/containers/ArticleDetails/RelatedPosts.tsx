import { AdsFullWidth } from "~/components/Ads"
import Card from "~/components/Card"
import { Heading2 } from "~/components/Heading"
import { ArticleListProp } from "~/types/ArticleComponentProps.type"

export default function RelatedPosts({ className, articles }: ArticleListProp) {
    const list = articles
    if (!list || list.length <= 0) return <AdsFullWidth>EMPTY</AdsFullWidth>
    return (
        <div className={`RelatedPosts relative ${className ?? ''}`}>
            <Heading2 text="BÀI VIẾT LIÊN QUAN" />

            <div className="mt-6 flex" >
                {list.map((r, index) => (
                    <div className="flicking-panel w-1/3 px-3" key={index}>
                        <Card article={r} />
                    </div>
                ))}
            </div>
        </div>
    )
}