import { CardProps } from '~/types/CardComponentProps.type'

export default function Card({ article, isNotShowAuthor, className }: CardProps) {
  const author = article?.author

  return (
    //   <div className="w-1/3">index</div>
    <a href={article.url}>
      <div className="Card group transition duration-300 ease-out cursor-pointer  bg-no-repeat bg-cover relative rounded-2xl">
        <img className={`rounded-2xl w-full h-198px object-cover ${className}`} src={article?.image} alt={article?.title?.substring(0, 20)} />
        <img
          className={`rounded-2xl -z-1 transition duration-300 ease-out opacity-0 group-hover:z-100 group-hover:opacity-100 absolute w-full inset-0 h-198px object-cover ${className}`}
          src={
            'https://s3-alpha-sig.figma.com/img/feb8/2f2f/d0ed9fffacf16e1dcafc7f5f25481a35?Expires=1665360000&Signature=cxUufJd-sUHt6Cxgx0xtpC~piOuAZXDQEzfpwlkNyZ9bTvlMlZ6FqhaIrL0vCivRghVPOjGfyvyx8wYnanzipY3-bbQZXhLwhJ4SSA9OZlXsvl~XcFEg~dFULV~JanfTItnmP2mZ2Ex2B28t2e-0POMNdawcBWBu0IPcbC2IthEaGbCj9Q3qWR0s6IZXKAv0nj4-EJNwnDKhyKBuxy7VoC1KeiYqUXqvYaSlUMlv~Hj1gBVpUSOGuzse-lsv4BfnWLG5q0g2J4eRDLSz31RMkvxfYfrhRdUp0vJs32fb3j5yTR7yOPlsmynb~btj9XMsgKM6F1D85Z~Ahor7203yrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          }
          alt={article?.title?.substring(0, 20)}
        />
        <p className="mt-4 text-base sm-max:text-sm sm-max:mt-2 bottom-1.5rem  inset-x-1.5rem text-grey font-semibold transition duration-300 ease-out group-hover:text-primary">{article?.title}</p>

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
