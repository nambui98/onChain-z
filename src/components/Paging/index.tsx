import { CommonProp } from '~/types/ArticleComponentProps.type'
import { ButtonOutline, ButtonPrimary } from '../Button'

type Props = CommonProp & {
  total: number
  currentPage: number
  pageSize: number
  originURL: string
}

export default function Paging({ className, total, pageSize, currentPage, originURL }: Props) {
  let numberPage = total / pageSize
  let listPage = []
  for (let index = 0; index < numberPage; index++) {
    if (currentPage === index + 1) {
      listPage.push(currentPage)
    } else if (currentPage > index) {
      if (index + 1 === currentPage - 2) {
        listPage.push('...')
      } else if (index + 1 < currentPage - 2 && index === 0) {
        listPage.push(index + 1)
      } else if (index + 1 > currentPage - 2) {
        listPage.push(index + 1)
      }
    } else {
      if (index === currentPage) {
        listPage.push(index + 1)
      } else if (index - 1 === currentPage && index < numberPage) {
        listPage.push('...')
      } else if (index === numberPage - 1) {
        listPage.push(index + 1)
      }
    }
  }

  return (
    <div className={`flex gap-2 justify-center ${className ?? ''}`}>
      {/* // TODO: Thach: paging */}
      {/* // TODO: cái này cần gì ở anh nhỉ? */}
      {listPage.map((page, index) => {
        if (typeof page !== 'string' && page === currentPage) {
          return (
            <a href={originURL + '?page=' + page}>
              <ButtonPrimary className="w-40px h-40px rounded-lg font-normal" onClick={() => {}}>
                {page}
              </ButtonPrimary>
            </a>
          )
        } else {
          return (
            <a href={originURL + '?page=' + getURL(page, currentPage, listPage[index + 1])}>
              <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => {}}>
                {page}
              </ButtonOutline>
            </a>
          )
        }
      })}
    </div>
  )
}

function getURL(page, currentPage, prevI) {
  if (typeof page !== 'string') {
    return page
  } else {
    if (currentPage > prevI) {
      return currentPage - 1
    } else {
      return currentPage + 1
    }
  }
}
