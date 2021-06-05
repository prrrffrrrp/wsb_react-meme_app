import { memeDb } from '../../memeDb';


const initialState = {...memeDb}

export const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE': {
            state[action.id] = {...state[action.id], ...action.payload}
            return { ...state }
        }
        case 'ADD_MEME': {
            state[action.id] = action.payload
            return { ...state }
        }
        default: return { ...state }
    }
}
