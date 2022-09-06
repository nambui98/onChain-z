import Styles from './styles.module.scss'

function PortfolioPreview({ project }) {
  const { frontmatter } = project
  return (
    <div className={'PortfolioPreview '}>
      <a href={project.url}>
        <div className={Styles.titleCard} style={`background-image:url(${frontmatter.image})`}>
          <h3 className={'title ' + Styles.title}>{frontmatter.title}</h3>
        </div>
        <div className="pa3">
          <p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
        </div>
      </a>

      <div>
        {frontmatter.tags.map((t) => (
          <div className={'tag ' + Styles.tag} data-tag={t}>
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioPreview
