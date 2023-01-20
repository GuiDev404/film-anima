import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

const INITIAL_STATE = {
  watches: [],
  watchlist: [],
}

export const WatchContext = createContext();

const WatchProvider = ({ children }) => {
  const [ state, setState ] = useState(()=> {
    return JSON.parse(localStorage.getItem('list')) ?? INITIAL_STATE
  });

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(state))
  }, [state])

  const add = ({ listName, item })=> {

    setState(prev=> ({ 
      ...prev,
      [listName]: [...prev[listName], item]
    }))
  }
  
  const remove = ({ listName, id })=> {
    setState(prev=> ({ 
      ...prev,
      [listName]: prev[listName].filter(i=> i.id !== id)
    }))
  }

  const existInList = (listName, id)=> state[listName].some(item=> item.id === id)

  const toggle = ({ listName, item })=> existInList(listName, item.id)
    ? remove({ listName, id: item.id })
    : add({ listName, item });

  return (
    <WatchContext.Provider value={{ state, toggle, existInList }}>
      {children}
    </WatchContext.Provider>
  )
}

export default WatchProvider