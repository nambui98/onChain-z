import Menu from '../Menu'
import styles from './styles.module.scss'

function Nav() {
  return (
    <nav className='bg-transparent '>
      {/* <div class="group"> */}



      <div className="w-screen-lg md:mx-auto flex justify-between items-center">
        <a href="/">
          <img src="/assets/images/logo.svg" alt="" />
        </a>
        <div className="text-white bg-primary uppercase text-2xl px-131px py-31px">
          Your ads here
        </div>
      </div>
      <div className={`h-62px border-1 border-primary border-opacity-20 ` + styles.borderY}>
        <div className="h-full w-screen-lg md:mx-auto">
          <Menu />
        </div>
      </div>
      {/* </div> */}

    </nav>
  )
}
export default Nav
