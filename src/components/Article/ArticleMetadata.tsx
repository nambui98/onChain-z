import styles from './ArticleMetadata.module.scss'
import Tag from '~/components/Tag/index.jsx'

export default function ArticleMetadata({ content }) {
  return (
    <div className={`${styles.container} ArticleMetadata`}>
      <div class="wrapper pt8 pb8 mb8 text-center">
        {content.tags.map((t) => (
          <Tag text={t} />
        ))}
        <h2 class="tagline">{content.description}</h2>
      </div>
    </div>
  )
}
