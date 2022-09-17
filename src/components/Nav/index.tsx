import Menu from '../Menu'
import { AdsInline } from '~/components/Ads'
import styles from './styles.module.scss'

function Nav() {
  return (
    <nav className="bg-transparent ">
      {/* <div class="group"> */}

      <div className="max-w-1120px md:mx-auto flex justify-between items-center">
        <a href="/">
          <img src="/assets/images/logo.svg" alt="" />
        </a>

        <AdsInline>Top Ads here</AdsInline>
      </div>
      <div className={`h-62px border-1 border-primary border-opacity-20 ` + styles.borderY}>
        <div className="h-full max-w-1120px md:mx-auto">
          <Menu />
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}
export default Nav
