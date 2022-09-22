import { useState } from "preact/hooks"
import { ArticleLDetailProp, ArticleProp } from "~/types/ArticleComponentProps.type"
import { ButtonOutlinePrimary, ButtonPrimary } from "../Button"
import RightDetail from '../../containers/ArticleDetails/RightDetail'
export function Account({ article, articles }: ArticleLDetailProp) {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className="flex items-center">
            <img className="rounded-full w-12 h-12 object-cover" src={article.author?.image ?? article.image} alt={article.author?.name} />
            <div className="flex flex-col justify-start ml-2" >

                <span className="text-base text-grey80 font-semibold ">{article.author?.name ?? "Nguyễn Trung Quân"}</span>
                <span className="text-base text-grey80 font-semibold text-sm">{article?.publishedDate ?? '22/12/2022'}</span>
            </div>
            <div className="ml-auto hidden sm-max:block cursor-pointer" onClick={() => {
                console.log(isShow);

                setIsShow(!isShow)
            }}>
                <img src="/assets/icons/icon-detail-author.svg" alt="" />
            </div>
            <div className={`fixed top-73px inset-0 bg-white  w-full z-10  transition duration-900 ease-out p-4`} style={{
                transition: '.3s all',
                left: isShow ? '0' : '100%'
            }}>
                <div className="flex flex-wrap">

                    <div className="text-sm font-semibold text-grey">Thông tin tác giả</div>
                    <img src="/assets/icons/close-circle.svg" className="cursor-pointer ml-auto" onClick={() => setIsShow(false)} alt="" />

                    <RightDetail className="w-full mt-1.125rem" article={article} articles={articles} />
                </div>
            </div>
        </div>
    )
}
export function AccountDetailArticle({ article }: ArticleProp) {
    return (
        <div className="flex items-start justify-between bg-gray40 p-4 rounded-2xl">
            <div className="flex flex-col justify-start">
                <img className="rounded-full w-64px h-64px object-cover" src={article.author?.image ?? article.image} alt={article.author?.name} />
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