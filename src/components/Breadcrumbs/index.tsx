import styles from './styles.module.scss'

export default function Breadcrumbs({ links }) {
  return (
    <nav className={`Breadcrumbs ${styles.container} my-4 text-xs`} aria-label="breadcrumb">
      <ol class="">
        {links.map((link, index) => {
          return (
            <>
              <li class="Breadcrumb">
                {link.href ? (
                  <a key={index} color="inherit" href={link.href || ''}>
                    {link.name}
                  </a>
                ) : (
                  <span className="">{link.name}</span>
                )}
              </li>
              {index !== links.length - 1 && (
                <li aria-hidden="true" class="">
                  /
                </li>
              )}
            </>
          )
        })}
      </ol>
    </nav>
  )
}
