import { getRandomItems, itemArticles } from './mockdata'

export interface Author {
  id: string
  name: string
  image: string
}

export interface Post {
  id: string
  url: string
  title: string
  image: string
  order?: number
  author?: Author
  publishedDate: string
  description: string
}

export class ContentService {
  protected store: any = {}

  constructor() {
    // https://vitejs.dev/guide/features.html#glob-import
    // https://discordapp.com/channels/830184174198718474/1020969761087168512
    let articles: any[] = import.meta.glob('/src/pages/articles/**/*.md', { eager: true })
    let categories: any[] = import.meta.glob('/src/pages/categories/**/*.md', { eager: true })
    let authors: any[] = import.meta.glob('/src/pages/authors/**/*.md', { eager: true })

    articles = Object.values(articles).map(this.convertArticle_NetlifyCMS_Lakdak)

    categories = Object.values(categories)
      .filter(({ frontmatter }) => !!frontmatter.title)
      .map(this.convertCategory_NetlifyCMS_Lakdak)
    categories = this.linkArticles(categories, articles)

    authors = Object.values(authors).map(this.convertAuthor_NetlifyCMS_Lakdak)
    authors = this.linkArticlesToAuthor(authors, articles)
    // TODO: loop articles, decorate author info, relatedArticles (relation, same tag)

    // TODO: loop articles, relatedArticles (relation, same tag)

    // TODO: pivot to transform to tags
    let tags = []

    this.store = {
      categories,
      articles,
      authors,
      tags,
    }

    // const posts = RawRepo.articles
    //   .sort((a, b) => {
    //     const aDate = new Date(b.frontmatter.publishDate)
    //     const bDate = new Date(a.frontmatter.publishDate)
    //     return aDate.getTime() - bDate.getTime()
    //   })
    //   .slice(0, 5)
  }

  /** convert NetlifyCMS Article frontmatter format to our Lakdak Article plain object format */
  protected convertArticle_NetlifyCMS_Lakdak(na) {
    return { url: na.url, ...na.frontmatter, body: na.compiledContent() }
  }

  /** convert NetlifyCMS Article frontmatter format to our Lakdak Article plain object format */
  protected convertCategory_NetlifyCMS_Lakdak(na) {
    return { url: na.url, ...na.frontmatter }
  }
  /** convert NetlifyCMS Article frontmatter format to our Lakdak Article plain object format */
  protected convertAuthor_NetlifyCMS_Lakdak(na) {
    return { url: na.url, ...na.frontmatter }
  }

  /** Link each category with its articles */
  protected linkArticles(categories: any[], articles: any[]) {
    return categories
      ?.filter(({ title }) => !!title)
      ?.map((cat) => {
        return { ...cat, articles: articles.filter((r) => r.category === cat.uuid) }
      })
  }
  /** Link each author with its articles */
  protected linkArticlesToAuthor(authors: any[], articles: any[]) {
    return authors
      ?.filter(({ title }) => !!title)
      ?.map((author) => {
        return { ...author, articles: articles.filter((r) => r.author === author.title) }
      })
  }

  getArticles() {
    return this.store.articles
  }

  /** only return published item, order by publishDate */
  getPublishedArticles() {
    return this.getArticles()
      .filter(({ publishDate }) => !!publishDate)
      .sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())

    // const unresolved = posts.map(async (post) => {
    //   const slug = post.frontmatter.slug || post.file.split('/')[post.file.split('/').length - 2]

    //   return {
    //     link: slug,
    //     title: post.frontmatter.title,
    //     description: post.frontmatter.description,
    //     pubDate: post.frontmatter.date,
    //     customData: `<content:encoded><![CDATA[${await post.compiledContent()}]]></content:encoded>`,
    //   }
    // })

    // return await Promise.all(unresolved)
  }

  getArticles_HomeHighlightItems() {
    return getRandomItems(this.store.articles, 10)
  }
  getArticles_HomeTVWidgetItems() {
    return getRandomItems(this.store.articles, 6)
  }

  getCategory(id) {
    return this.store.categories.filter((c) => c.uuid === id)[0]
  }

  getCategories() {
    return this.store.categories
  }

  getAuthor(id) {
    return this.store.authors.filter((a) => a.uuid === id)[0]
  }
}
