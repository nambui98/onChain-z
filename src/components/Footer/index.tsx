import AppConfig from '~/AppConfig'
import * as packagejson from '../../../package.json'
import { CommonLinkProp, CommonProp } from '~/types/types'

const ShortLink = ({ href, children }: CommonLinkProp) => {
  if (href) {
    return (
      <a href={href} className="text-xs font-semibold text-grey80 leading-20px mt-4 sm-max:w-1/3 sm-max:mr-4">
        <span>{children}</span>
      </a>
    )
  }

  return <span className="text-xs font-semibold text-grey80 leading-20px mt-4 sm-max:w-1/3 sm-max:mr-4">{children}</span>
}

function Footer(props: CommonProp) {
  return (
    <footer className={'AppFooter sm-max:px-4 ' + props.className ?? ''}>
      <div className="md:container max-w-1120px flex justify-between sm-max:flex-col lg:m-auto sm:mx-3">
        <div className="w-3/8 sm-max:w-full">
          <a href="/" className="flex items-center text-28px font-bold text-grey">
            <img src="/assets/images/logo.svg" className="mr-4px" alt="site logo" />
            {AppConfig.SiteName}
          </a>
          <p className="mt-6 text-grey80 text-xs font-semibold sm-max:mt-4">Before we dive in to the your career, tell me a little bit about yourself and what’s important to you outside of work?</p>
        </div>
        <div className="flex flex-col flex-wrap sm-max:flex-row">
          <p className="text-sm font-semibold text-grey leading-22px sm-max:mt-6 sm-max:w-full">Sample</p>
          <ShortLink href="/categories">Categories</ShortLink>
          <ShortLink href="/tags">Tags</ShortLink>
          <ShortLink href="/products">Shop</ShortLink>
        </div>
        <div className="flex flex-col flex-wrap sm-max:flex-row">
          <p className="text-sm font-semibold text-grey leading-22px sm-max:mt-6 sm-max:w-full">QUICK LINK 1</p>
          {Array(3)
            .fill(0)
            .map((r) => (
              <ShortLink>Short link no 002</ShortLink>
            ))}
        </div>
        <div className="flex flex-col flex-wrap sm-max:flex-row">
          <p className="text-sm font-semibold text-grey leading-22px sm-max:mt-6 sm-max:w-full">QUICK LINK 1</p>

          {Array(3)
            .fill(0)
            .map((r) => (
              <ShortLink>Short link no 003</ShortLink>
            ))}
        </div>
      </div>
      <div className="border-1 p-6 mt-10 sm-max:mt-6 sm-max:p-4 sm-max:-mx-4">
        <div className="md:container max-w-1120px md:mx-auto text-grey text-sm font-semibold" title={`🚀 ${packagejson.releasenote} ${packagejson.productName} v${packagejson.version}`}>
          {AppConfig.Copyright} {AppConfig.SiteName}
        </div>
      </div>
    </footer>
  )
}
export default Footer
