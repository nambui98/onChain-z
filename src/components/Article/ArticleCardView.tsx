import Styles from './ArticleCardView.module.scss'

function ArticleCardView({ project }) {
  const { frontmatter } = project
  return (
    <div className={`ArticleCardView ${Styles.card}`} m="2">
      <div className={Styles.titleCard} style={`background-image:url(${frontmatter.image})`}>
        <span className={Styles.title}>{frontmatter.title}</span>
      </div>
      <div className="pa3">
        <div className={'tags'}>
          {frontmatter.tags.map((t) => (
            <div className={'tag ' + Styles.tag} data-tag={t}>
              {t}
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
