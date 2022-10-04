import { Account } from '~/components/Account'
import { ButtonOutlinePrimary } from '~/components/Button'
import { Heading1 } from '~/components/Heading'
import Tag from '~/components/Tag'
import { ArticleProp, CommonProp } from '~/types/ArticleComponentProps.type'

export default function LeftDetail({ className, article }: ArticleProp) {
  return (
    <>
      <div className="pt-6 mt-6 border-t-1 border-gray40">
        <Heading1 text={article.title} className="leading-44px" />
        <div className="mt-6">
          <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
        </div>
      </div>
      <div className="mt-10 flex gap-2 sm-max:flex-wrap">
        {article.tags.map((t) => (
          <Tag text={t} />
        ))}
        <div className="ml-auto sm-max:ml-0">
          <ButtonOutlinePrimary className="group w-162px h-38px sm-max:mt-6" onClick={() => {}}>
            <img src="/assets/icons/export.svg" className="mr-2 transition duration-300 ease-out filter group-hover:brightness-0 group-hover:invert" alt="" />
            Chia sẻ bài viết
          </ButtonOutlinePrimary>
        </div>
      </div>
    </>
  )
}
