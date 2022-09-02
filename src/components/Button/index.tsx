/** Primary link button */
function Button({ href, children }: { href?: string; children: any }) {
  return (
    <a href={href} bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="uppercase sm white" font="light" p="y-2 x-4" border="2 rounded blue-200">
      {children}
    </a>
  )
}

export default Button
