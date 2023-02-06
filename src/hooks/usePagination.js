import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const usePagination = ({ initPage = 1 } = {}) => {
  let [params, setSearchParams] = useSearchParams();

  const queryInitialPage = parseInt(params.get('page'), 10)
  const [ page, setPage ] = useState(queryInitialPage || initPage);
  
  useEffect(()=> {
    setSearchParams({ page: parseInt(page, 10) })
  }, [page])

  const nextPage = ()=> setPage(prev=> prev + 1)
  const prevPage = ()=> setPage(prev=> prev - 1)

  const resetPage = ()=> {
    setPage(initPage)
    // setSearchParams({ page: initPage })
  }

  return {
    page, 
    nextPage,
    prevPage,
    resetPage
  }
}
