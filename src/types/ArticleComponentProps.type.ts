import { Author, Post } from '~/services/ContentService'

/** Common HTML Prop */
export type CommonProp = {
  className?: string
  children?: any
}
/** Common HTML Link Prop */
export type CommonLinkProp = CommonProp & {
  href?: string
}

export type ArticleProp = CommonProp & {
  article: Post
}

export type ArticleListProp = CommonProp & {
  articles: Post[]
}
export type ArticleDetailProp = CommonProp & {
  articles: Post[]
  article: Post
  author?: Author
}
