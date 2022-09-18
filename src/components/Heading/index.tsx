type CommonHtmlProp = {
  text?: String
  className?: String
  children?: String
}

export function Heading1({ text, className, children }: CommonHtmlProp) {
  return (
    <h1 className={`${className} flex items-baseline text-4xl font-bold text-primary`}>
      <div className="mr-3">
        <img src="/assets/icons/rect.svg" className="align-baseline" alt="heading icon" />
      </div>
      {text}
      {children}
    </h1>
  )
}
export function Heading2({ text, className, children }: CommonHtmlProp) {
  return (
    <h2 className={`${className} flex items-baseline text-2xl font-bold text-secondary`}>
      <div className="mr-2">
        <img src="/assets/icons/rect.svg" className="align-baseline" alt="heading icon" />
      </div>
      {text}
      {children}
    </h2>
  )
}
