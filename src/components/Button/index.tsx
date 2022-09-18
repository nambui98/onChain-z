import { CommonProp } from "~/types/ArticleComponentProps.type";

type Props = CommonProp & {
  onClick: Function
}
export function ButtonPrimary({ onClick, children }: Props) {
  return <button className="absolute right-8px top-8px bottom-8px rounded-[32px] bg-primary w-108px  flex justify-center items-center text-white text-base font-semibold cursor-pointer transition duration-300 ease-out hover:text-primary hover:bg-transparent hover:border-1 border-primary">
    {children}
  </button>
}