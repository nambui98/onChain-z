import AppConfig from '~/AppConfig'
import * as packagejson from '../../../package.json'
import { CommonLinkProp, CommonProp } from '~/types/ArticleComponentProps.type'

const ShortLink = ({ href, children }: CommonLinkProp) => {
  if (href) {
    return (
      <a href={href}>
        <p className="text-xs font-semibold text-grey80 leading-20px mt-4">{children}</p>
      </a>
    )
  }

  return <p className="text-xs font-semibold text-grey80 leading-20px mt-4">{children}</p>
}

function Footer(props: CommonProp) {
  return (
    <footer className={'AppFooter ' + props.className ?? ''}>
      <div className="md:container max-w-1120px md:mx-auto flex justify-between">
        <div className="w-3/8">
          <a href="/" className="flex items-center text-28px font-bold text-grey">
            <img src="/assets/images/logo.svg" className="mr-4px" alt="site logo" />
            {AppConfig.SiteName}
          </a>
          <p className="mt-6 text-grey80 text-xs font-semibold">Before we dive in to the your career, tell me a little bit about yourself and what’s important to you outside of work?</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-grey leading-22px">QUICK LINK 1</p>
          <ShortLink href="/categories">Categories</ShortLink>
          <ShortLink href="/categories/tv">TV</ShortLink>
          {Array(2)
            .fill(0)
            .map((r) => (
              <ShortLink>Short link no 001</ShortLink>
            ))}
        </div>
        <div>
          <p className="text-sm font-semibold text-grey leading-22px">QUICK LINK 1</p>
          <ShortLink href="/products">Shop</ShortLink>
          {Array(3)
            .fill(0)
            .map((r) => (
              <ShortLink>Short link no 002</ShortLink>
            ))}
        </div>
        <div>
          <p className="text-sm font-semibold text-grey leading-22px">QUICK LINK 1</p>
          <ShortLink href="/tags">Tags</ShortLink>
          {Array(3)
            .fill(0)
            .map((r) => (
              <ShortLink>Short link no 003</ShortLink>
            ))}
        </div>
      </div>
      <div className="border-1 p-6 mt-10">
        <div className="md:container max-w-1120px md:mx-auto text-grey text-sm font-semibold" title={`🚀 ${packagejson.releasenote} ${packagejson.productName} v${packagejson.version}`}>
          {AppConfig.Copyright} {AppConfig.SiteName}
        </div>
      </div>
    </footer>
  )
}
export default Footer
