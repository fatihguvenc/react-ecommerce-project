import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState = {
  favorites: localStorage.getItem('favorites') 
    ? JSON.parse(localStorage.getItem('favorites')) 
    : []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

   useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }, [state])

  const addToFavorites = (product) => {
        dispatch({type: "ADD_TO_FAVORITES", payload: product})
    }  

  const removeFromFavorites = (id) => {
        dispatch({type: "REMOVE_FROM_FAVORITES", payload: id})
    }   

  return(
    <GlobalContext.Provider value={{
      favorites: state.favorites,
      addToFavorites: addToFavorites,
      removeFromFavorites: removeFromFavorites
      }}
    >
     {props.children}
    </GlobalContext.Provider>
  )
}