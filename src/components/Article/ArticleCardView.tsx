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
