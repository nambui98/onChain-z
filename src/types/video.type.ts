import { CommonProp } from "./ArticleComponentProps.type"

export type VideoType = {
    // [{ videoLink: "https://www.youtube.com/watch?v=bmtJ4eWUmjo", title: "Hello world from onchainZ TV" }]
    videoLink: string,
    title: string,
    thumbnail: string
}

export type TivisProps = CommonProp & {
    videos: VideoType[]
}
export type TiviProps = CommonProp & {
    video: VideoType
}