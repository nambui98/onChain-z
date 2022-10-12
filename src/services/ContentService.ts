import { getRandomItems, itemArticles } from './mockdata'
import { flatten, uniq, concat, uniqBy, clone } from 'lodash'

export interface Author {
  title: string
  name: string
  image: string
  summary?: string
  tags?: string[]
  body: string
}

export interface Post {
  id: string
  uuid: string
  url: string
  title: string
  body: string
  draft: false
  image: string
  tags: string[]
  order?: number
  category: string
  author?: Author
  publishedDate: string
  description: string
}

export class ContentService {
  protected store: any = {}

  constructor() {
    const self = this

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
    // decorate author field with authorDTO
    articles.map((a) => {
      const authorDto = self.getAuthor(a.author, authors)

      if (authorDto) {
        // shalow clone, to avoid cyclic references
        a.author = {
          url: authorDto.url,
          title: authorDto.title,
          image: authorDto.image,
          summary: authorDto.summary,
          tags: authorDto.tags,
          body: authorDto.body,
        }
      }

      return a
    })

    // pivot to transform to tags
    let tags = {}
    const allAvailableTags = uniq(flatten(articles.map((a) => a.tags)))
    for (const tagName of allAvailableTags) {
      tags[tagName] = {
        articles: articles.filter((a) => a.tags.indexOf(tagName) >= 0),
      }
    }

    this.store = {
      categories,
      articles,
      authors,
      tags,
    }
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
        return { ...author, articles: clone(articles.filter((r) => (r.author || r.author?.title) === author.title)) }
      })
  }

  /**
   *
   * @param articles array of articles to sort
   * @param maxCount max number of items in returning result
   * @returns
   */
  protected sortArticlesByPublishDate(articles, maxCount?) {
    let ret = articles.sort((a, b) => {
      const aDate = new Date(b.publishDate)
      const bDate = new Date(a.publishDate)
      return aDate.getTime() - bDate.getTime()
    })

    if (maxCount > 0) {
      ret = ret.slice(0, maxCount)
    }

    return ret
  }

  getArticle(urlOrUuid) {
    return (
      this.store.articles
        //
        .filter((a) => a.url == urlOrUuid || a.uuid == urlOrUuid)[0]
    )
  }

  getArticles() {
    return this.store.articles
  }

  /** only return published item, order by publishDate */
  getPublishedArticles(articles) {
    let ret = (articles || this.getArticles()).filter(({ publishDate }) => !!publishDate)

    ret = this.sortArticlesByPublishDate(ret)
    return uniqBy(ret, 'uuid')

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

  /** loop articles, return relatedArticles by using same tags */
  getRelateArticles(article) {
    if (!article || !article.tags) return []

    let ret = []
    for (const tagName of article.tags) {
      ret = concat(ret, this.store.tags[tagName].articles)
    }

    return this.getPublishedArticles(ret)
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

  getAuthor(id, authors?) {
    return (authors || this.store.authors)?.filter((a) => a.title === id)[0]
  }
}
