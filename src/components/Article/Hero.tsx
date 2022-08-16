import styles from "./Hero.module.scss"

export default function Hero({ post }) {
  const { img, title } = post || {}
  return (
    <header style={`background-image:url(${img})`} class={styles.hero}>
      <h2 class={styles.title}>{title}</h2>
    </header>
  )
}
