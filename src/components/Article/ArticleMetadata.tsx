import styles from './ArticleMetadata.module.scss'

export default function ArticleMetadata({ content }) {
  return (
    <div className={`${styles.container} ArticleMetadata`}>
      <div class="wrapper pt8 pb8 mb8 tac">
        {content.tags.map((t) => (
          <span class="tag">{t}</span>
        ))}
        <h2 class="tagline">{content.description}</h2>
      </div>
    </div>
  )
}
