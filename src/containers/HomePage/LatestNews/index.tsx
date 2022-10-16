import React from 'react'
import Card from '~/components/Card'
import { Heading2 } from '~/components/Heading'

import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import './style.scss'

const Separator = () => {
  return <hr className="border-primary bg-primary  border-2 my-6"></hr>
}

const CardRelatedList = () => {
  return (
    <ul className="">
      {Array(3)
        .fill(0)
        .map((c, i) => {
          return <li className="text-grey80 text-sm cursor-pointer font-semibold">{`Finblox ${i} ra mắt “Pool Party”, rút thăm may mắn hàng tuần không mất phí`}</li>
        })}
    </ul>
  )
}

export default function LatestNews({ articles, className }: ArticleListProp) {
  return (
    <div className={`LatestNews sm-max:px-4 ${className ?? ''}`}>
      <Heading2 text="Tin tức MỚI NHẤT" />
      <div className="flex gap-x-8 mt-6">
        <div className="w-1/3 sm-max:w-full">
          <Card article={articles[0]} isNotShowAuthor={true} />
          <Separator />
          <CardRelatedList />
        </div>
        <div className="w-1/3 sm-max:hidden">
          <Card article={articles[0]} isNotShowAuthor={true} />
          <Separator />
          <CardRelatedList />
        </div>
        <div className="w-1/3 sm-max:hidden">
          <Card article={articles[0]} isNotShowAuthor={true} />
          <Separator />
          <CardRelatedList />
        </div>
      </div>
    </div>
  )
}
