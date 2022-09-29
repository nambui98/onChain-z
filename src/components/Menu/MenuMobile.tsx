import { useState } from "preact/hooks"
import { menu_data } from "~/Const"
import { Menu } from "~/types/MenuProps.type"


type Props = {
    currentPath: string
}


export default function MenuMobile({ currentPath }: Props) {
    return (
        <div className="group relative z-100 pl-1.375rem cursor-pointer ">
            <div className="w-32px">

                <img onClick={() => { }} src="/assets/icons/menu.png" className="w-full" alt="" />
            </div>
            <ul className="w-max z-1000000 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 right-0 text-right  absolute  bg-white px-4 py-5 transition-all duration-300 ease-in-out ">
                {
                    menu_data.map((menu, index) => {
                        return <li key={index} className={`groupDropdown transition-all duration-150 ease-in-out px-2 py-3 text-sm text-grey hover:text-primary uppercase ${index != menu_data.length - 1 ? 'mb-3' : ''} ${menu.path === currentPath ? 'text-primary' : ''}`}>
                            {
                                menu.submenu ? <div>

                                    <Submenu info={menu} currentPath={currentPath} />
                                </div> : <a href={menu.path} >{menu.name}</a>
                            }

                        </li>;
                    })
                }
            </ul>
        </div>
    )
}

function Submenu({
    info,
    currentPath
}: { info: Menu, currentPath: string }) {
    const [active, setActive] = useState(false)
    return <div>
        <div className="" onClick={() => setActive((prev) => !prev)}>{info.name} <img src="/assets/icons/arrow-down.png" className={`transition-all duration-150 ease-in-out inline-block transform ${active ? 'rotate-180' : ''}`} alt="" /></div>
        <ul className={`submenu h-0 opacity-0 transition-all duration-150 ease-in-out ${active ? 'h-max opacity-100' : ''}`}>
            {
                info.submenu.map((submenu, index) => <li className={`transition-all duration-150 ease-in-out px-3 py-2 text-sm text-grey hover:text-primary uppercase  ${index == 0 ? 'mt-3' : ''} ${submenu.path === currentPath ? 'text-primary' : ''}`}><a href={submenu.path}> {submenu.name}</a></li>)
            }
        </ul>
    </div>

}