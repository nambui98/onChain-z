import { ArticleLDetailProp, ArticleProp } from "~/types/ArticleComponentProps.type"
import LeftDetail from "./LeftDetail"
import RelatedPosts from "./RelatedPosts"
import RightDetail from "./RightDetail"

type Props = {}

export default function Detail({ article, articles }: ArticleLDetailProp) {
    return (
        <div className="ArticleDetails">
            <div className="flex  border-b-1 border-gray40 pb-6">

                <LeftDetail article={article} className="w-5/7" />
                <RightDetail article={article} articles={articles} className="w-2/7" />
            </div>
            <RelatedPosts className="mt-10" articles={articles.slice(0, 3)} />
        </div>
    )
}