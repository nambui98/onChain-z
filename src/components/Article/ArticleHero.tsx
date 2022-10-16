import React from 'react'
import styles from './ArticleHero.module.scss'

export default function ArticleHero({ content, children = null }) {
  const { image, title } = content || {}
  return (
    <>
      <header style={`background-image:url(${image})`} class={styles.hero}>
        {children}
      </header>
    </>
  )
}
