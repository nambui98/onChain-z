import { ArticleDetailProp, ArticleProp } from '~/types/types'
import LeftDetail from './LeftDetail'
import RelatedPosts from './RelatedPosts'
import RightDetail from './RightDetail'

export default function Detail({ article, articles }: ArticleDetailProp) {
  return (
    <div className="ArticleDetails sm-max:px-4">
      <div className="flex  border-b-1 border-gray40 pb-6 gap-8">
        <LeftDetail article={article} className="w-5/7 sm-max:w-full" />
        <RightDetail article={article} articles={articles} className="w-2/7 sm-max:hidden" />
      </div>

      <RelatedPosts className="mt-10" articles={articles.slice(0, 5)} />
    </div>
  )
}
