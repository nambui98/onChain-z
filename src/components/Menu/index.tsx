import { menu_data } from '~/Const'
import { Menu } from '~/types/MenuProps.type'
import MenuItem from './MenuItem'
import './style.scss'

type Props = {
  currentPath: string
}

export default function Menu({ currentPath }: Props) {

  return (
    <div className="h-full flex items-center">
      <ul className="PrimaryNav with-indicator uppercase font-600 z-10">
        {/* // TODO: Nam: cần bóc một NavItem ra làm component */}
        {
          menu_data.map((menu, index) => {
            return <MenuItem key={index} info={menu} active={menu.path === currentPath} />
          })
        }
      </ul>

      <div className="w-386px">
        <img className="ml-auto" src="/assets/icons/search-normal.svg" alt="" srcset="" />
      </div>
    </div>
  )
}
