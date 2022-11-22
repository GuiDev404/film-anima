import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Search from '../components/Search'

const Series = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  )
}

export default Series