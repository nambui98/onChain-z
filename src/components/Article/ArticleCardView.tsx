import Styles from './ArticleCardView.module.scss'
import { CardProps } from '~/types/types'

function ArticleCardView({ project }) {
  const { frontmatter } = project
  return (
    <div className={`ArticleCardView ${Styles.card}`} m="2">
      <div className={Styles.titleCard} style={`background-image:url(${frontmatter.image})`}></div>
      <h3 className={'title ml-2'}>{frontmatter.title}</h3>
      <div className="p-3">
        <div className={'tags'}>
          {frontmatter.tags.map((tag) => (
            <div className={'tag '} data-tag={tag}>
              {tag}
            </div>
          ))}
        </div>
        <a className={Styles.link} href={project.url}>
          <span className={Styles.linkInner}>View</span>
        </a>
      </div>
    </div>
  )
}

export default ArticleCardView

export function ArticleCardViewTitleInside({ article }) {
  return (
    <div
      className=" row-span-1 sm-max:row-span-1 sm-max:col-span-1 bg-no-repeat bg-cover relative rounded-2xl"
      style={{
        backgroundImage: `url(${article?.image})`,
      }}
    >
      <a href={article?.url} className="text-xl absolute bottom-0 rounded-2xl p-4 bg-gradient-to-t from-[#1e1e1e53] to-#1e1e1ea7 sm-max:text-xs text-white font-semibold">
        {article?.title}
      </a>
    </div>
  )
}

export function ArticleCardTitleBelow({ article, isNotShowAuthor, className }: CardProps) {
  const author = article?.author

  return (
    //   <div className="w-1/3">index</div>
    <a className="Card" href={article.url}>
      <div className="group transition duration-300 ease-out cursor-pointer  bg-no-repeat bg-cover relative rounded-2xl">
        <img className={`rounded-2xl w-full h-198px object-cover ${className}`} src={article?.image} alt={article?.title?.substring(0, 20)} />
        <img
          className={`rounded-2xl -z-1 transition duration-300 ease-out opacity-0 group-hover:z-100 group-hover:opacity-100 absolute w-full inset-0 h-198px object-cover ${className}`}
          src={'https://picsum.photos/id/93/300/300'}
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
