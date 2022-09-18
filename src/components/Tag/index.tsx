/** Tag with link */
function Tag({ text, href, children }: { text: string; href?: string; children?: any }) {
  const link = href ?? `/tags/${text}`

  return (
    <a className="tag bg-gray40 text-grey80 font-semibold text-sm py-2 px-4" href={link} data-tag={text}>
      {text}
      {children}
    </a>
  )
}

export default Tag
