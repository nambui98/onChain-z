import { Menu } from '~/types/MenuProps.type'

export const menu_data: Menu[] = [
  {
    name: 'Tin tức coin',
    path: '/categories/tv',
  },
  {
    name: 'Tin tức nổi bật',
    path: '/categories/tv',
  },
  {
    name: 'Kiến thức',
    path: '/categories/knowledge',
    submenu: [
      {
        name: 'Blockchain là gì?',
        path: '/categories/deepdive',
      },
      {
        name: 'Web3 là gì?',
        path: '/categories/hotnews',
      },
    ],
  },
  {
    name: 'Chủ đề chuyên sâu',
    path: '/categories/deepdive',
  },
]
