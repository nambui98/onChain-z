import { ArticleProp } from "~/types/ArticleComponentProps.type"
import { ButtonOutlinePrimary, ButtonPrimary } from "../Button"

export function Account({ article }: ArticleProp) {
    return (
        <div className="flex items-center">
            <img className="rounded-full w-12 h-12" src={article.author?.image ?? article.image} alt={article.author?.name} />
            <div className="flex flex-col justify-start ml-2" >

                <span className="text-base text-grey80 font-semibold ">{article.author?.name ?? "Nguyễn Trung Quân"}</span>
                <span className="text-base text-grey80 font-semibold text-sm">{article?.publishedDate ?? '22/12/2022'}</span>
            </div>
        </div>
    )
}
export function AccountDetailArticle({ article }: ArticleProp) {
    return (
        <div className="flex items-start bg-gray20 p-4 rounded-2xl">
            <div className="flex flex-col justify-start">
                <img className="rounded-full w-64px h-64px" src={article.author?.image ?? article.image} alt={article.author?.name} />
                <span className="text-base text-grey80 font-semibold mt-2">{article.author?.name ?? "Nguyễn Trung Quân"}</span>
            </div>
            <div className="flex flex-col justify-start ml-2" >
                <ButtonOutlinePrimary onClick={() => { }} >
                    Theo dõi
                </ButtonOutlinePrimary>
            </div>
        </div>
    )
}