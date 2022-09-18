import Card from '~/components/Card'
import { Heading2 } from '~/components/Heading'

import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import './style.scss'

export default function LatestNews({ articles, className }: ArticleListProp) {
  return (
    <div className={`LatestNews ${className ?? ''}`}>
      <Heading2 name="Tin tức MỚI NHẤT" />
      <div className="flex gap-x-8 mt-6">
        <div className="w-1/3">
          <Card article={articles[0]} isNotShowAuthor={true} />
          <hr className="border-primary bg-primary  border-2 my-6"></hr>
          <ul className="">
            <li className="text-grey80 text-sm cursor-pointer font-semibold">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
            <li className="text-grey80 text-sm cursor-pointer font-semibold">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
            <li className="text-grey80 text-sm cursor-pointer font-semibold">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
          </ul>
        </div>
        <div className="w-1/3">
          <Card article={articles[0]} isNotShowAuthor={true} />
          <hr className="border-primary bg-primary  border-2 my-6"></hr>
          <ul className="">
            <li className="text-grey80 text-sm cursor-pointer font-semibold">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
            <li className="text-grey80 text-sm cursor-pointer font-semibold">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
            <li className="text-grey80 text-sm cursor-pointer font-semibold">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
          </ul>
        </div>
        <div className="w-1/3">
          <Card article={articles[0]} isNotShowAuthor={true} />
          <hr className="border-primary bg-primary border-2 my-6"></hr>
          <ul className="text-grey80 text-sm font-semibold">
            <li className="transition duration-300 ease-out cursor-pointer  hover:text-primary">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
            <li className="transition duration-300 ease-out cursor-pointer  hover:text-primary">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
            <li className="transition duration-300 ease-out cursor-pointer  hover:text-primary">Finblox ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
