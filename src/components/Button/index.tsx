/** Primary link button */
export function Button({ children }: { href?: string; children: any }) {
  return (
    <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="uppercase sm white" font="light" p="y-2 x-4" border="2 rounded blue-200">
      {children}
    </button>
  )
}

/** Primary link button */
export function ButtonInline({ href, children }: { href?: string; children: any }) {
  return (
    <a role="button" href={href}>
      <button bg="blue-100 hover:blue-200" text="sm" font="light" p="y-2 x-4" border="2 rounded blue-200" role="button" className={'btn '}>
        {children}
      </button>
    </a>
  )
}
