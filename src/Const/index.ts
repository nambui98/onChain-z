import { Menu } from "~/types/MenuProps.type";

export const menu_data: Menu[] = [
    {
        name: 'Tin tức coin',
        path: '/'
    },
    {
        name: 'Tin tức nổi bật',
        path: '/featured-news'
    },
    {
        name: 'Kiến thức',
        path: '/',
        submenu: [
            {
                name: 'Blockchain là gì?',
                path: '/',
            },
            {
                name: 'Web3 là gì?',
                path: '/',
            }
        ]
    },
    {
        name: 'Chủ đề chuyên sâu',
        path: '/'
    },
]