import { CommonProp } from '~/types/ArticleComponentProps.type'

type Props = CommonProp

/** Ads, show full width of container */
export function AdsFullWidth({ children, className }: Props) {
  return <div class={`AdsFullWidth Ads bg-primary w-9/12 h-90px mx-auto mt-20 uppercase text-2xl flex items-center justify-center text-white z-1 ${className ?? ''}`}>{children}</div>
}

/** Ads, show full width of container */
export function AdsInline({ children, className }: Props) {
  return <div className={`AdsInline Ads text-white bg-primary uppercase text-2xl flex justify-center items-center h-6rem w-28rem z-1s ${className ?? ''}`}>{children}</div>
}
/** Ads, show custom size of container */
export function AdsCustomSize({ children, className }: Props) {
  return <div className={`AdsInline Ads text-white bg-primary uppercase text-2xl px-131px py-31px z-1s ${className ?? ''}`}>{children}</div>
}
