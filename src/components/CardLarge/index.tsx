import { ContentService } from '~/services/ContentService'
import { CardProps } from '~/types/types'

export default function CardLarge({ article, isNotShowAuthor, isNotShowDescription, classNameImage, classNameTitle }: CardProps) {
  const author = article?.author

  return (
    //   <div className="w-1/3">index</div>
    <div className="Card group transition duration-300 ease-out cursor-pointer  bg-no-repeat bg-cover relative flex justify-between items-start mb-6">
      <div>
        <a href={article.url} className={`text-base  bottom-1.5rem  inset-x-1.5rem text-grey font-semibold transition duration-300 ease-out group-hover:text-primary ${classNameTitle ?? ''}`}>
          {article?.title}
        </a>
        {!isNotShowDescription && <p className="text-sm text-grey80 font-semibold mt-2">{article.description}</p>}
        {author && !isNotShowAuthor ? (
          <div className="flex items-center mt-4">
            <img className="rounded-full w-8 h-8" src={author?.image} alt={author?.title} />
            <span className="text-base text-grey80 font-semibold ml-2">{author?.title}</span>
            <span className="text-base text-grey80 font-semibold text-sm ml-auto">{article?.publishedDate}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <img className={`rounded-2xl w-full w-256px object-cover  ml-8 ${classNameImage ?? ''}`} src={article?.image} alt={article?.title?.substring(0, 20)} />
    </div>
  )
}
