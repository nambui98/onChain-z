import { useState } from 'preact/hooks'
import { ArticleDetailProp, ArticleProp } from '~/types/types'
import { ButtonOutlinePrimary, ButtonPrimary } from '../Button'
import { Author } from '~/services/ContentService'
import RightDetail from '~/containers/ArticleDetails/RightDetail'

export function Account({ article, articles }: ArticleDetailProp) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="flex items-center">
      <img className="rounded-full w-12 h-12 object-cover" src={article.author?.image ?? article.image} alt={article.author?.name} />
      <div className="flex flex-col justify-start ml-2">
        <span className="text-base text-grey80 font-semibold ">{article.author?.name ?? 'Nguyễn Trung Quân'}</span>
        <span className="text-base text-grey80 font-semibold text-sm">{article?.publishedDate ?? '22/12/2022'}</span>
      </div>
      <div
        className="ml-auto hidden sm-max:block cursor-pointer"
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        <img src="/assets/icons/icon-detail-author.svg" alt="" />
      </div>
      <div
        className={`fixed top-73px inset-0 bg-white  w-full z-10  transition duration-900 ease-out p-4`}
        style={{
          transition: '.3s all',
          left: isShow ? '0' : '100%',
        }}
      >
        <div className="flex flex-wrap">
          <div className="text-sm font-semibold text-grey">Thông tin tác giả</div>
          <img src="/assets/icons/close-circle.svg" className="cursor-pointer ml-auto" onClick={() => setIsShow(false)} alt="" />

          <RightDetail className="w-full mt-1.125rem" article={article} articles={articles} />
        </div>
      </div>
    </div>
  )
}

export function AccountDetailArticle({ author }: { author: Author }) {
  return (
    <div className="flex items-start justify-between bg-gray40 p-4 md:p-4 sm:p-3 rounded-2xl flex-wrap">
      <div className="flex flex-col justify-start">
        <img className="rounded-full w-64px h-64px md:w-64px md:h-64px sm:w-36px sm:h-36px object-cover" src={author?.image} alt={author?.title} />
        <span className="text-base md:text-base text-grey80 font-semibold mt-2 sm:text-sm">{author?.title ?? 'Ẩn danh'}</span>
      </div>
      <div className="flex flex-col justify-start ml-2">
        <ButtonOutlinePrimary className="md:w-108px sm:w-80px md:text-base sm:text-sm" onClick={() => {}}>
          Theo dõi
        </ButtonOutlinePrimary>
      </div>
    </div>
  )
}
