import { CommonProp } from '~/types/ArticleComponentProps.type'

type Props = CommonProp

/** Ads, show full width of container */
export function AdsFullWidth({ children }: Props) {
  return <div class="AdsFullWidth Ads bg-primary w-9/12 h-90px mx-auto mt-20 uppercase text-2xl flex items-center justify-center text-white z-1">{children}</div>
}

/** Ads, show full width of container */
export function AdsInline({ children, className }: Props) {
  return <div className={`AdsInline Ads text-white bg-primary uppercase text-2xl px-131px py-31px z-1s ${className ?? ''}`}>{children}</div>
}
