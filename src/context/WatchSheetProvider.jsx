import React, { createContext, useCallback, useState } from 'react'
export const WatchSheetContext = createContext();

const WatchSheetProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const openSheet = useCallback(()=> setOpen(true), []) 
  const closeSheet = useCallback(()=> setOpen(false), [])

  const sheetValue = { isOpen, openSheet, closeSheet }

  return (
    <WatchSheetContext.Provider value={sheetValue}>
      {children}
    </WatchSheetContext.Provider>
  )
}

export default WatchSheetProvider