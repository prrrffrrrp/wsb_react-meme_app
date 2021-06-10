import { memeDb } from '../../memeDb';

const initialState = {
  memes: memeDb,
};

const updateUpVote = (meme) => ({ ...meme, upvotes: meme.upvotes + 1 });

const updateDownVote = (meme) => ({ ...meme, downvotes: meme.downvotes + 1 });

const vote = (memeId, memes, updateVotesCallback) => memes.map((meme) => {
  if (meme.id !== memeId) {
    return meme;
  }
  return updateVotesCallback(meme);
});

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPVOTE': {
      const newArrayUpvote = vote(action.id, state.memes, updateUpVote);
      return {
        ...state,
        memes: newArrayUpvote,
      };
    }
    case 'DOWNVOTE': {
      const newArrayDowvote = vote(action.id, state.memes, updateDownVote);
      return {
        ...state,
        memes: newArrayDowvote,
      };
    }
    case 'ADD_MEME': {
      return {
        ...state,
        memes: [...state.memes, action.payload],
      };
    }
    default: return { ...state };
  }
};
