import { WatchContext } from "../context/WatchProvider";
import { useContext } from 'react'

const useSheetList = () => {
  return useContext(WatchContext)
}

export default useSheetList