import { Menu, MenuItemProps } from '~/types/types'

export default function MenuItem({
  info,
  active,
  onMouseOver,
  onMouseOut,
}: MenuItemProps & {
  onMouseOver: Function
  onMouseOut: Function
}) {
  return (
    <li
      onMouseOver={(e) => {
        if (e.target.offsetLeft > 100) {
          onMouseOver(e.target.offsetLeft)
        } else {
          onMouseOver(e.target.offsetParent.offsetLeft)
        }
      }}
      onMouseOut={() => {
        onMouseOut()
      }}
      className={`Nav-item ${active ? 'is-active' : ''}`}
    >
      {!info.submenu ? (
        <a
          onMouseOver={(e) => {
            // e.preventDefault();
            onMouseOver(e.target.offsetParent.offsetLeft)
          }}
          href={info.path}
        >
          {info.name}
        </a>
      ) : (
        <Submenu onMouseOver={onMouseOver} info={info} />
      )}
    </li>
  )
}

function Submenu({ info, onMouseOver }: { info: Menu; onMouseOver: Function }) {
  return (
    <a href={info.submenu ? '' : info.path} className="h-full w-full">
      <div
        div
        className="group h-full  w-full"
        onMouseOver={(e) => {
          // onMouseOver(e.target.offsetLeft)
        }}
      >
        <button aria-haspopup="true" aria-controls="menu" class="pointer-events-none h-full w-full outline-none focus:outline-none rounded-sm flex justify-center items-center min-w-32">
          <span class="pr-1 uppercase font-600">{info.name}</span>
          <span>
            <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul id="menu" aria-hidden="true" class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute  transition duration-150 ease-in-out origin-top min-w-32 z-10">
          {info.submenu.map((submenu) => (
            <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
              <a href={submenu.path}> {submenu.name}</a>
            </li>
          ))}

          {/* <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button aria-haspopup="true" aria-controls="menu-lang" class="w-full text-left flex items-center outline-none focus:outline-none">
                        <span class="pr-1 flex-1">Langauges</span>
                        <span class="mr-auto">
                            <svg
                                class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </span>
                    </button>
                    <ul
                        id="menu-lang"
                        aria-hidden="true"
                        class="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                    >
                        <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
                        <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                            <button aria-haspopup="true" aria-controls="menu-lang-python" class="w-full text-left flex items-center outline-none focus:outline-none">
                                <span class="pr-1 flex-1">Python</span>
                                <span class="mr-auto">
                                    <svg
                                        class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </button>
                            <ul
                                id="menu-lang-python"
                                aria-hidden="true"
                                class="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                            >
                                <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                                <li class="px-3 py-1 hover:bg-gray-100">3+</li>
                            </ul>
                        </li>
                        <li class="px-3 py-1 hover:bg-gray-100">Go</li>
                        <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
                    </ul>
                </li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li> */}
        </ul>
      </div>
    </a>
  )
}
