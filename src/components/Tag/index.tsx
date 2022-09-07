/** Tag with link */
function Tag({ text, href, children }: { text: string; href?: string; children?: any }) {
  const link = href ?? `/tags/${text}`

  return (
    <a className="tag" href={link} data-tag={text}>
      {text}
      {children}
    </a>
  )
}

export default Tag
