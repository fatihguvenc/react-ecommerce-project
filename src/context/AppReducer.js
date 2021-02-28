export default (state, action) => {
  switch(action.type) {
    case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            }
            
    case "REMOVE_FROM_FAVORITES":
            return {
                ...state,
                favorites: state.favorites.filter(product => product.id !== action.payload)
            }        

    default : 
     return state
  }
}