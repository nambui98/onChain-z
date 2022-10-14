import { Author, Post } from '~/services/ContentService'

export type Menu = {
  name: string
  path: string
  submenu?: Menu[]
}

export type MenuItemProps = {
  info: Menu
  active?: boolean
  key: any
}

export interface CommonHtmlProps {
  className: string
}

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

export type CardProps = ArticleProp & {
  isNotShowAuthor?: boolean
  isNotShowDescription?: boolean
  classNameImage?: string
  classNameTitle?: string
}
