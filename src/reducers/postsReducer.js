const INITIAL_STATE = { all: [], post: '' };

export const postsReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){

        case 'FETCH_DATA_SUCCESS':
                return {all:action.data}

        case 'FETCH_DATA_ERROR':
            return [...state, {error:action.error}]

        case 'INSERT_DATA_SUCCESS':
        return { 
            ...state,
            all: [...state.all, action.data]
        }
           
            
        case 'EDIT_DATA_SUCCESS':
            return [...state, action.payload]

        case 'DELETE_DATA_SUCCESS':
            let newState;
            newState = state.all.filter(post =>{
                return post.id !== action.id
            })
            return {all:newState, post:''}
        
        case 'UPDATE_DATA_SUCCESS':
            let obj = state.all.find(post => post.id === action.id)
            let index = state.indexOf(obj)
            return [...state, state[index]=action.data]
            
        
        case 'UPDATE_DATA_ERROR':
            return state.error = 'ERRO - Update data failed.'

        case 'SINGLE_POST_FETCH_SUCCESS':
            return {...state, post:action.data}
        default:        
            return state
    }
}

//08008837313

//89,10   28/08

//