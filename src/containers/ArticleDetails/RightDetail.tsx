import { AccountDetailArticle } from "~/components/Account"
import CardLarge from "~/components/CardLarge"
import { ArticleLDetailProp, ArticleListProp, ArticleProp, CommonProp } from "~/types/ArticleComponentProps.type"


export default function RightDetail({ className, articles, article }: ArticleLDetailProp) {
    return (
        <div className={`${className ?? ''}`}>
            <AccountDetailArticle article={article} />
            <p className="mt-10 text-grey80 text-sm font-semibold">Bài viết cùng tác giả</p>
            <div>
                {articles.slice(0, 4).map((r, index) => (
                    <div className="py-4 border-b-1 border-gray100" key={index}>
                        <CardLarge classNameImage='h-72px w-72px' classNameTitle={'text-xs'} article={r} isNotShowDescription={true} />
                    </div>
                ))}
            </div>
        </div>
    )
}