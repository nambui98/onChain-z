import { getRandomItems, itemArticles } from './mockdata'

const allPosts = itemArticles

// //i.pravatar.cc/300?u=${item.game}`
// https: //picsum.photos/800/300
// https: //picsum.photos/id/55/300/300

export default class PostService {
  getHomeHighlightItems() {
    return getRandomItems(allPosts, 10)
  }
  getHomeTVWidgetItems() {
    return getRandomItems(allPosts, 6)
  }

  constructor() {}
  getAll() {
    // return getRandomItems(allPosts, 6)
    return allPosts.filter((r) => r)
  }
}

// https://i.pravatar.cc/300?u=${item.game}`
// https://picsum.photos/800/300
// https://picsum.photos/id/55/300/300

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
}
