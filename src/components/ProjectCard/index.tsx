import Styles from './styles.module.scss'

function ProjectCard({ project }) {
  const { frontmatter: meta } = project

  return (
    <div class="box" style={`background-image:url(${meta.image})`}>
      <div class="text-center space-y-2">
        <div class="space-y-5">
          <a href={project.url} title={meta.description}>
            <h3 class="title text-lg text-black dark:text-white font-semibold mb-2">{meta.title}</h3>
          </a>

          <p class="text-gray-500 dark:text-gray-300 font-medium pb-3">{meta.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
