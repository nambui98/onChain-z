import { getRandomItems, itemArticles } from './mockdata'
const allPosts = itemArticles

export interface Author {
  id: string
  name: string
  image: string
}

export interface Post {
  id: string
  order?: number
  title: string
  image: string
  author?: Author
  publishedDate: string
}

export default class PostService {
  protected store: any[] = []

  constructor(store: any) {
    this.store = store.map(this.convertNetlifyCMSArticleToLakdakArticle)
    // console.log(this.store[0])
  }

  /** convert NetlifyCMS Article frontmatter format to our Lakdak Article plain object format */
  convertNetlifyCMSArticleToLakdakArticle(na) {
    return { url: na.url, ...na.frontmatter }
  }

  getAll() {
    return getRandomItems(this.store, 100)
  }
  getHomeHighlightItems() {
    return getRandomItems(this.store, 10)
  }
  getHomeTVWidgetItems() {
    return getRandomItems(this.store, 6)
  }
}
