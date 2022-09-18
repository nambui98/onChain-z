import Card from '~/components/Card'
import Heading2 from '~/components/Heading'
import { ArticleListProp } from '~/types/ArticleComponentProps.type'

export default function LatestNews({ articles, className }: ArticleListProp) {
  return (
    <div className={`LatestNews ${className ?? ''}`}>
      <Heading2 name="Tin tức MỚI NHẤT" />
      <div className="flex gap-x-8 mt-6">
        <div className="w-1/3">
          <Card article={articles[0]} isNotShowAuthor={true} />
        </div>
        <div className="w-1/3">
          <Card article={articles[0]} isNotShowAuthor={true} />
        </div>
        <div className="w-1/3">
          <Card article={articles[0]} isNotShowAuthor={true} />
        </div>


      </div>
    </div>
  )
}
