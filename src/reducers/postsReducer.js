
export const postsReducer = (state = [], action)=>{
    switch(action.type){

        case 'FETCH_DATA_SUCCESS':
            return [...state, action.data]    

        case 'FETCH_DATA_ERROR':
            return [...state, {error:action.error}]

        case 'INSERT_DATA_SUCCESS':
            return [...state, action.data]
            
        case 'EDIT_DATA_SUCCESS':
            return [...state, action.payload]

        case 'DELETE_DATA_SUCCESS':
            let newState;
            newState = state.filter(post =>{
                return post.id !== action.id
            })
            return [...state, newState]
        
        case 'UPDATE_DATA_SUCCESS':
            return state
        
        case 'UPDATE_DATA_ERROR':
            return state.error = 'ERRO - Update data failed.'


        default:        
            return state
    }
}

//08008837313

//89,10   28/08

//