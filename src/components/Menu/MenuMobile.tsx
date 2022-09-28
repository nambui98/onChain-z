import { useState } from "preact/hooks"
import { menu_data } from "~/Const"


type Props = {
    currentPath: string
}


export default function MenuMobile({ currentPath }: Props) {
    return (
        <div className="group relative z-100">

            <img onClick={() => { }} src="/assets/icons/menu.png" className="w-full w-2rem" alt="" />
            <ul className="w-max z-1000000 opacity-0 group-hover:opacity-100 right-0 text-right  absolute  bg-white px-4 py-5 transition-all duration-300 ease-in-out ">
                {
                    menu_data.map((menu, index) => {
                        return <li key={index} className={`transition-all duration-150 ease-in-out px-2 py-3 text-sm text-grey hover:text-primary uppercase ${index != 0 ? 'mt-3' : ''} ${menu.path === currentPath ? 'text-primary' : ''}`}><a href={menu.path} >{menu.name}</a> </li>;
                    })
                }
            </ul>
        </div>
    )
}