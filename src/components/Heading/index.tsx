import { CommonProp } from "~/types/ArticleComponentProps.type"

type Props = CommonProp & {
  text: String
}

export function Heading1({ text, className }: Props) {
  return (
    <div className={`flex items-baseline ${className ?? ''}`}>

      <h2 className="text-32px font-bold text-grey ml-8px">{text}</h2>
    </div>
  )
}
export function Heading2({ text }: Props) {
  return (
    <div className="flex items-baseline">
      <div>
        <img src="/assets/icons/rect.svg" className="align-baseline" alt="" />
      </div>
      <h2 className="text-2xl font-bold text-grey ml-8px">{text}</h2>
    </div>
  )
}
