/** Primary link button */
function Button({ children }: { href?: string; children: any }) {
  return (
    <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="uppercase sm white" font="light" p="y-2 x-4" border="2 rounded blue-200">
      {children}
    </button>
  )
}

export default Button
