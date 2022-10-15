import Styles from './ArticleCardView.module.scss'

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
