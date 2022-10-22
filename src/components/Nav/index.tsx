import React from 'react';
import Menu from '../Menu'
import { AdsInline } from '~/components/Ads'
import styles from './styles.module.scss'

function Nav({ pathname }: { pathname: string }) {
  return (
    <nav className="bg-transparent relative z-2">
      <div className="max-w-1120px md:mx-auto flex justify-between items-center">
        <a href="/">
          <img src="/assets/images/logo.svg" alt="site logo" />
        </a>

        <AdsInline>Top Ads here</AdsInline>
      </div>
      <div className={`h-62px sm-max:hidden border-1 border-primary border-opacity-20 border-r-0 border-l-0`}>
        <div className="h-full max-w-1120px md:mx-auto">
          <Menu currentPath={pathname} />
        </div>
      </div>
    </nav>
  )
}
export default Nav
