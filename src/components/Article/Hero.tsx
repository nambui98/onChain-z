import styles from "./hero.module.scss"

export default function Hero({ post }) {
  const { img, title } = post || {}
  return (
    <header style={`background-image:url(${img})`} class={styles.hero}>
      <h1 class={styles.title}>{title}</h1>
    </header>
  )
}
