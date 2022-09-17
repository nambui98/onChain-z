type Props = {
  name: String
  children: any
}

/** Ads, show full width of container */
export function AdsFullWidth({ name, children }: Props) {
  return <div class="AdsFullWidth Ads bg-primary w-9/12 h-90px mx-auto mt-20 uppercase text-2xl flex items-center justify-center text-white">{children}</div>
}

/** Ads, show full width of container */
export function AdsInline({ children }: Props) {
  return <div className="AdsInline Ads text-white bg-primary uppercase text-2xl px-131px py-31px">{children}</div>
}
