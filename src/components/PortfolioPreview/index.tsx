import React from 'react';
import Styles from './styles.module.scss'
import Tag from '~/components/Tag/index.jsx'

function PortfolioPreview({ project }) {
  const { frontmatter } = project
  return (
    <div className={'PortfolioPreview '}>
      <a href={project.url}>
        <div className={Styles.titleCard} style={`background-image:url(${frontmatter.image})`}>
          <h3 className={'title '}>{frontmatter.title}</h3>
          <div>
            {frontmatter.tags.map((t) => (
              <Tag text={t} />
            ))}
          </div>
          <div className="p-3">
            <p className={`mt-0 mb-2`}>{frontmatter.description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PortfolioPreview
