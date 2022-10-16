import { ArticleCardViewTitleInside } from '~/components/Article/ArticleCardView'
import { ArticleListProp } from '~/types/types'

export default function MainNews({ articles, className }: ArticleListProp) {
  {
    // TODO: Thach: em cần data post chính
    // TODO: Nam? component này ko dùng, ko cần làm đúng ko?
  }
  const list = articles
  const firstItem = list[0]
  const secondItem = list[1]
  const thirdItem = list[2]

  return (
    <div className={`$MainNews grid grid-cols-main grid-rows-main sm-max:gap-y-4 sm-max:gap-x-9px sm-max:grid-cols-2 sm-max:grid-rows-mainMobile gap-x-8 sm-max:h-auto sm-max:px-4 ${className ?? ''}`}>
      <div
        className="bg-[url('/img/hero-pattern.svg')] row-span-2 sm-max:col-span-2 sm-max:row-span-1  bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${firstItem?.image})`,
        }}
      >
        <a href={firstItem?.url} className="text-xl absolute bottom-0 p-4 rounded-2xl bg-gradient-to-t from-[#1e1e1e53] to-#1e1e1ea7  text-white font-semibold">
          {firstItem?.title}
        </a>
      </div>
      <div
        className=" row-span-2 sm-max:col-span-1 sm-max:row-span-1 bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${secondItem?.image})`,
        }}
      >
        <a href={secondItem?.url} className="p-4 rounded-2xl bg-gradient-to-t from-[#1e1e1e53] to-#1e1e1ea7 text-xl absolute bottom-0  sm-max:text-xs bg text-white font-semibold">
          {secondItem?.title}
        </a>
      </div>

      <ArticleCardViewTitleInside article={thirdItem} />

      <ul class=" mt-4 sm-max:mt-7px list-outside list-disc ml-5 row-span-1 sm-max:col-span-2">
        {list.slice(0, list.length - 1).map((post, index) => (
          <li class={`text-primary ${index != 0 ? 'mt-4' : ''}`}>
            <a href={post?.url} class="text-grey text-sm font-semibold transition duration-300 ease-out cursor-pointer hover:text-primary">
              {post?.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
