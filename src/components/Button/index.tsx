import { CommonProp } from "~/types/ArticleComponentProps.type";

type Props = CommonProp & {
  onClick: Function
}
export function ButtonPrimary({ onClick, children, className }: Props) {
  return <button className={`right-8px top-8px bottom-8px rounded-[32px] bg-primary w-108px  flex justify-center items-center text-white text-base font-semibold cursor-pointer transition duration-300 ease-out hover:text-primary hover:bg-transparent hover:border-1 border-primary ${className ?? ''}`}>
    {children}
  </button>
}
export function ButtonOutline({ onClick, children, className }: Props) {
  return <button className={`border-1 border-grey60 text-grey80 w-108px  flex justify-center items-center text-base font-semibold cursor-pointer transition duration-300 ease-out hover:text-primary hover:bg-transparent hover:border-1 hover:border-primary ${className ?? ''}`}>
    {children}
  </button>
}
export function ButtonOutlinePrimary({ onClick, children, className }: Props) {
  return <button className={`border-1 py-2 border-primary rounded-xl text-primary w-108px  flex justify-center items-center text-white text-base font-semibold cursor-pointer transition duration-300 ease-out hover:text-primary hover:bg-primary hover:text-white ${className ?? ''}`}>
    {children}
  </button>
}