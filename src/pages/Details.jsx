import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {
  const params = useParams()
  const [ type ] = location.pathname.split('/').filter(Boolean);

  return (
    <>Details of {type}: {params.id}</>
  )
}

export default Details