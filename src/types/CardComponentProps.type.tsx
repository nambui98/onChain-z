import { ArticleProp } from "./ArticleComponentProps.type"

export type CardProps = ArticleProp & {
    isNotShowAuthor?: boolean
    isNotShowDescription?: boolean
    classNameImage?: string
    classNameTitle?: string
}