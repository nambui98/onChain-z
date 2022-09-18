import { CardProps } from "~/types/CardComponentProps.type"


export default function Card({ article, isNotShowAuthor, className }: CardProps) {
  const author = article?.author

  return (
    //   <div className="w-1/3">index</div>
    <a href="/article-details">

      <div
        className="Card group transition duration-300 ease-out cursor-pointer  bg-no-repeat bg-cover relative rounded-2xl"
      >
        <img className={`rounded-2xl w-full h-198px object-cover ${className}`} src={article?.image} alt={article?.title?.substring(0, 20)} />
        <p className="mt-4 text-base  bottom-1.5rem  inset-x-1.5rem text-grey font-semibold transition duration-300 ease-out group-hover:text-primary">{article?.title}</p>

        {author && !isNotShowAuthor ? (
          <div className="flex items-center mt-4">
            <img className="rounded-full w-8 h-8" src={author?.image} alt={author?.name} />
            <span className="text-base text-grey80 font-semibold ml-2">{author?.name}</span>
            <span className="text-base text-grey80 font-semibold text-sm ml-auto">{article?.publishedDate}</span>
          </div>
        ) : (
          <></>
        )}

      </div>
    </a>
  )
}
