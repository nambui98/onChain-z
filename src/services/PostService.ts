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
  description: string
}

export default class PostService {
  protected store: any[] = []

  constructor(store: any) {
    this.store = store.map(this.convertRecord_NetlifyCMS_Lakdak)
    // console.log(this.store[0])
  }

  /** convert NetlifyCMS Article frontmatter format to our Lakdak Article plain object format */
  convertRecord_NetlifyCMS_Lakdak(na) {
    return { url: na.url, ...na.frontmatter }
  }

  getAll() {
    return this.store
  }
  getHomeHighlightItems() {
    return getRandomItems(this.store, 10)
  }
  getHomeTVWidgetItems() {
    return getRandomItems(this.store, 6)
  }
}

export class CategoryService {
  protected store: any[] = []

  constructor(store: any) {
    this.store = store.map(this.convertRecord_NetlifyCMS_Lakdak)
    // const categories = (await Astro.glob('../categories/**/*.md')).filter(({ frontmatter }) => !!frontmatter.title)
  }

  /** convert NetlifyCMS Article frontmatter format to our Lakdak Article plain object format */
  convertRecord_NetlifyCMS_Lakdak(na) {
    return { url: na.url, ...na.frontmatter }
  }

  getAll() {
    return this.store
  }
}
