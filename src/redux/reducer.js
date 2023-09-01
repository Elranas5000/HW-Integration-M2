import { ADD_FAV, REMOVE_FAV } from "./actions-types";


const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action) =>{
    switch(action.type){

        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.type.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.type.payload) //filter retorna un nuevo array
            }

        default: return {...state}
    }
}

export default reducer;