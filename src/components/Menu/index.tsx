import { useEffect, useRef, useState } from 'preact/hooks'
import { menu_data } from '~/Const'
import { Menu } from '~/types/MenuProps.type'
import MenuItem from './MenuItem'
import './style.scss'

type Props = {
  currentPath: string
}

export default function Menu({ currentPath }: Props) {
  const [activeSearch, setActiveSearch] = useState(false)
  const [reset, setReset] = useState(false)
  const [offset, setOffset] = useState<number>()
  const refInput = useRef(null)
  const refIndicator = useRef(null)
  useEffect(() => {
    resetInitIndicator()
    // debugger
  }, [currentPath])
  const resetInitIndicator = () => {
    const index = menu_data.findIndex((object) => {
      return object.path === currentPath
    })
    if (index < 0) {
      refIndicator.current.style.display = 'none'
    } else {
      let offsetInit = (document.querySelectorAll('.Nav-item')[index] as any).offsetLeft
      setOffset(offsetInit)
      refIndicator.current.style.left = 'calc(85px + ' + offsetInit + 'px)'
    }
  }

  return (
    <div className="h-full flex items-center z-10">
      <ul className="PrimaryNav with-indicator uppercase font-600 z-2">
        {menu_data.map((menu, index) => {
          return (
            <MenuItem
              onMouseOut={() => {
                resetInitIndicator()
              }}
              onMouseOver={(offset) => {
                setOffset(offset)
                refIndicator.current.style.left = 'calc(85px + ' + offset + 'px)'
              }}
              key={index}
              info={menu}
              active={menu.path === currentPath}
            />
          )
        })}
      </ul>
      <span
        ref={refIndicator}
        className={`h-2px w-34px bg-primary absolute bottom-0   z-2`}
        style={{
          transition: 'all .3s',
          transform: 'translateX(-50%)',
        }}
      ></span>

      <div className="w-386px sm-max:w-228px pl-15">
        <form className="w-full">
          <label class="relative block">
            <input
              ref={refInput}
              placeholder="Tìm kiếm..."
              type="text"
              className={`animationPlace absolute right-0 opa transform -translate-y-1/2 top-0 p-0 py-10px bg-transparent border-0 border-b-1 border-primary text-sm font-semibold transition duration-1000 ease-out ${
                activeSearch ? 'w-full' : 'w-0'
              } ${activeSearch ? 'opacity-100 active' : 'opacity-0'} placeholder-slate-400 focus:outline-none focus:border-0 focus:border-b-1 focus:border-primary focus:ring-0 `}
              style={{
                transition: 'all .5s ease',
                transitionProperty: 'width, opacity',
              }}
            />
            <button type="button" className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={() => {}}>
              <img
                onClick={() => {
                  {
                    /* // TODO: Thach: em cần api search bài viết param: name  // link qua trang /search */
                  }
                  refInput?.current?.focus()
                  setActiveSearch(!activeSearch)
                }}
                className="ml-auto sm-max:mr-4 w-24px h-24px cursor-pointer"
                src={activeSearch ? '/assets/icons/search-normal-active.png' : '/assets/icons/search-normal.png'}
                alt=""
                srcset={activeSearch ? '/assets/icons/search-normal-active.png' : '/assets/icons/search-normal.png'}
              />
            </button>
          </label>
        </form>
      </div>
    </div>
  )
}
