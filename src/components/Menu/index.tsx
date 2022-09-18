import { useRef, useState } from 'preact/hooks'
import { menu_data } from '~/Const'
import { Menu } from '~/types/MenuProps.type'
import MenuItem from './MenuItem'
import './style.scss'

type Props = {
  currentPath: string
}

export default function Menu({ currentPath }: Props) {
  const [activeSearch, setActiveSearch] = useState(false);
  const refInput = useRef(null);
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

      <div className="w-386px pl-15">
        <form className="w-full">
          <label class="relative block">
            <input ref={refInput} placeholder="Tìm kiếm..." type="text" className={`absolute right-0 transform -translate-y-1/2 top-0 p-0 py-10px bg-transparent border-0 border-b-1 border-primary text-sm font-semibold transition duration-1000 ease-out ${activeSearch ? 'w-full' : 'w-0'} placeholder-slate-400 focus:outline-none focus:border-0 focus:border-b-1 focus:border-primary focus:ring-0`} style={{
              transition: 'width .5s ease',
            }} />
            <button type="button" className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={() => { }}>
              <img onClick={() => {
                refInput?.current?.focus();
                setActiveSearch(!activeSearch);
              }} className="ml-auto w-24px h-24px cursor-pointer" src={activeSearch ? "/assets/icons/search-normal-active.png" : "/assets/icons/search-normal.png"} alt="" srcset={activeSearch ? "/assets/icons/search-normal-active.png" : "/assets/icons/search-normal.png"} />
            </button>
          </label>

        </form>
        {/* {
          activeSearch && <h1>aaaaaaaaa</h1>
        }
        <img onClick={() => {
          setActiveSearch(!activeSearch);
          console.log("aaaaaaaaaaaaaaa");
        }} className="ml-auto w-24px h-24px cursor-pointer" src="/assets/icons/search-normal.png" alt="" srcset="/assets/icons/search-normal.png" /> */}
      </div>
    </div>
  )
}
