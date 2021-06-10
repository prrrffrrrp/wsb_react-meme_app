import { memeDb } from '../../memeDb';

const initialState = {
  memes: memeDb,
};

export const globalReducer = (state = initialState, action) => {
  const targetMeme = (memeId) => state.memes.find((m) => m.id === memeId);

  const updateUpVote = (meme) => ({ ...meme, upvotes: meme.upvotes + 1 });

  const updateDownVote = (meme) => ({ ...meme, downvotes: meme.downvotes + 1 });

  const vote = (memeId, updateVotesCallback, targetMemeCallback) => {
    const memeFound = targetMemeCallback(memeId);
    return state.memes.map((meme) => {
      if (meme !== memeFound) {
        return meme;
      }
      return updateVotesCallback(meme);
    });
  };

  switch (action.type) {
    case 'UPVOTE': {
      const newArrayUpvote = vote(action.id, updateUpVote, targetMeme);
      return {
        ...state,
        memes: newArrayUpvote,
      };
    }
    case 'DOWNVOTE': {
      const newArrayDowvote = vote(action.id, updateDownVote, targetMeme);
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
