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
    this.store = allPosts || store
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
