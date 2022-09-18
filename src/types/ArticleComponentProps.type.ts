import { Post } from '~/services/PostService'

export type CommonProp = {
  className?: string
  children?: any
}

export type ArticleProp = CommonProp & {
  article: Post
}

export type ArticleListProp = CommonProp & {
  articles: Post[]
}
export type ArticleLDetailProp = CommonProp & {
  articles: Post[],
  article: Post
}