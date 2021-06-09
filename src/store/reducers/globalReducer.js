import { memeDb } from '../../memeDb';


const initialState = {
    memes: memeDb
}

export const globalReducer = (state = initialState, action) => {

    const targetIndex = (memeId) => state.memes.findIndex(m => m.id === memeId);

    const updateUpVote = (meme) => {
        return {...meme, upvotes: meme.upvotes+1};
    } 

    const updateDownVote = (meme) => {
        return {...meme, downvotes: meme.downvotes+1};
    } 

    const vote = (memeId, updateVotesCallback, targetIndexCallback) => {
        const memeIndex = targetIndexCallback(memeId)
        return state.memes.map((meme, index) => {
            if (index !== memeIndex) {
                return meme
            }
            return updateVotesCallback(meme)
            
        })
    }

    switch(action.type) {
        case 'UPVOTE': {
            const newArrayUpvote = vote(action.id, updateUpVote, targetIndex);
            return {
                ...state, 
                memes: newArrayUpvote
            }
            
        }
        case 'DOWNVOTE': {
            const newArrayDowvote = vote(action.id, updateDownVote, targetIndex)
            return {
                ...state, 
                memes: newArrayDowvote
            }

        }
        case 'ADD_MEME': {
            return { 
                ...state,
                memes: [...state.memes, action.payload]
            }
        }
        default: return { ...state }
    }
}
