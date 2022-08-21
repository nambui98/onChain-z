import Styles from './styles.module.scss'

function ProjectCard({ project }) {
  const { frontmatter: meta } = project

  return (
    <div className={Styles.card}>
      <div className={Styles.titleCard} style={`background-image:url(${meta.image})`}>
        <h3 className={Styles.title}>{meta.title}</h3>
      </div>
      <div className="pa3">
        <a className={Styles.link} href={project.url} title={meta.description}>
          <span className={Styles.linkInner}>View</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
