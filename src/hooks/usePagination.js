import { useState } from 'react'

export const usePagination = ({ initPage = 1 } = {}) => {
  const [ page, setPage ] = useState(initPage);

  const nextPage = ()=> setPage(prev=> prev + 1)
  const prevPage = ()=> setPage(prev=> prev - 1)

  const resetPage = ()=> setPage(initPage)

  return {
    page, 
    nextPage,
    prevPage,
    resetPage
  }
}
