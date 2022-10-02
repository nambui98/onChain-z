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
        path: '/knowledge',
        submenu: [
            {
                name: 'Blockchain là gì?',
                path: '/123',
            },
            {
                name: 'Web3 là gì?',
                path: '/333',
            }
        ]
    },
    {
        name: 'Chủ đề chuyên sâu',
        path: '/in-depth-topics'
    },
]