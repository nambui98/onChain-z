import React from 'react';
import { Account } from '~/components/Account'
import { ButtonOutlinePrimary, CopyButton } from '~/components/Button'
import { Heading1 } from '~/components/Heading'
import Modal from '~/components/Modal'
import Tag from '~/components/Tag'
import { ArticleProp } from '~/types/types'

import './style-content.scss'
import { useState } from 'preact/hooks';
import Share from '~/components/Share';
// import { ArticleProp, CommonProp } from '~/types/ArticleComponentProps.type'

export default function LeftDetail({ className, article, href }: ArticleProp & { href: string }) {

  return (
    <>
      <div className={`${className ?? ''} pt-6 mt-6 border-t-1 border-gray40`}>
        <Heading1 text={article.title} className="leading-44px" classTitle={"leading-44px"} />
        <div className="mt-6">
          <div className="content" dangerouslySetInnerHTML={{ __html: article.body }}></div>
        </div>
      </div>
      <div className="mt-10 flex gap-2 sm-max:flex-wrap">
        {article.tags?.map((t) => (
          <Tag text={t} />
        ))}
        <Share href={href} />
      </div>
    </>
  )
}
