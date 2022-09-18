import { ArticleProp } from "./ArticleComponentProps.type"

export type CardProps = ArticleProp & {
    isNotShowAuthor?: boolean,
    imageHeight?: string
}