import { useContext } from "react"
import { WatchSheetContext } from "../context/WatchSheetProvider"

const useSheetView = () => {
  return useContext(WatchSheetContext)
}

export default useSheetView