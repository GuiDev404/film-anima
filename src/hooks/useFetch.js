import { useEffect, useState } from 'react'

export const useFetch = ({ url }) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: null
  });

  const request = async ()=> {
    if(url){
      setState({ ...state, isLoading: true })

      try {
        const response = await fetch(url);
        const data = await response.json();
        
        setState({ ...state, error: null, data })
      } catch (error) {
        setState({ ...state, error: error.message })
      } finally {
        setState(prevState=> ({ ...prevState, isLoading: false }))
      }
    }
  } 

  useEffect(()=> {
    request();
  }, [url])

  return {
    ...state,
    request
  }
}