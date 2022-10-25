import React from 'react';
import { CommonProp } from '~/types/types'

type Props = CommonProp & {
  text: String,
  classTitle: String
}

export function Heading1({ text, className, classTitle, children }: Props) {
  return (
    <div className={`flex items-baseline ${className ?? ''}`}>
      <h2 className={`text-32px sm-max:text-2xl font-bold text-grey ml-8px ${classTitle ?? ''}`}>
        {text}
        {children}
      </h2>
    </div>
  )
}

export function Heading2({ text, className, children }: Props) {
  return (
    <div className={`flex items-baseline ${className ?? ''}`}>
      <div>
        <img src="/assets/icons/rect.svg" className="align-baseline" alt="rectangle icon" />
      </div>
      <h2 className="text-2xl font-bold text-grey ml-8px">
        {text}
        {children}
      </h2>
    </div>
  )
}

export function Heading3({ text, className, children }: Props) {
  return (
    <div className={`flex items-baseline ${className ?? ''}`}>
      <div>
        <img src="/assets/icons/rect.svg" className="align-baseline" alt="rectangle icon" />
      </div>
      <h3 className="text-xl font-bold text-grey ml-8px">
        {text}
        {children}
      </h3>
    </div>
  )
}
