
export type Menu = {
    name: string,
    path: string,
    submenu?: Menu[]
}

export type MenuItemProps = {
    info: Menu
    active?: boolean,
    key: any
}
